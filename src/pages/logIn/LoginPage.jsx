import { Link, useNavigate } from "react-router-dom"
import * as S from "./LoginPage.styles"
import { useEffect, useState } from "react"
import { login } from "../../api"
import { useUserContext } from "../../contexts/user"
import { useLoginContext } from "../../contexts/login"
import logo from "../../img/logo_black.png"

export default function LoginPage() {
  const navigate = useNavigate()
  const [error, setError] = useState(null)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const [disabled, setDisabled] = useState()

  const { setCurrentUser } = useUserContext()
  const { toggleLogin } = useLoginContext()

  const handleLogin = async () => {
    try {
      setDisabled(true)
      const user = await login({ email, password })

      if (user.detail) {
        setError(user.detail)
      }

      if (user.id) {
        setCurrentUser(user)
        toggleLogin(true)
        navigate("/")
      }
    } catch (error) {
      console.log(error.message)
      setError(error.message)
    } finally {
      setDisabled(false)
    }
  }

  const loginClick = () => {
    if (login?.length === 0) {
      setError("Введите логин")
    } else if (password?.length === 0) {
      setError("Введите пароль")
    } else {
      handleLogin()
    }
  }

  // Сбрасываем ошибку если пользователь меняет данные на форме или меняется режим формы
  useEffect(() => {
    setError(null)
  }, [email, password])

  return (
    <S.PageContainer>
      <S.ModalForm>
        <Link to="/login">
          <S.ModalLogo>
            <S.ModalLogoImage src={logo} alt="logo" />
          </S.ModalLogo>
        </Link>

        <S.Inputs>
          <S.ModalInput
            type="text"
            name="login"
            placeholder="Почта"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value)
            }}
          />
          <S.ModalInput
            type="password"
            name="password"
            placeholder="Пароль"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value)
            }}
          />
        </S.Inputs>
        {error && <S.Error>{error}</S.Error>}
        <S.Buttons>
          <S.PrimaryButton onClick={() => loginClick()} disabled={disabled}>
            Войти
          </S.PrimaryButton>
          <Link to="/registration">
            <S.SecondaryButton disabled={disabled}>
              Зарегистрироваться
            </S.SecondaryButton>
          </Link>
        </S.Buttons>
      </S.ModalForm>
    </S.PageContainer>
  )
}
