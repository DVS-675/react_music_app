import { Link, useNavigate } from "react-router-dom"
import * as S from "./RegistrationPage.styles"
import { useEffect, useState } from "react"
import { registration, getToken } from "../../api"
import { useUserContext } from "../../contexts/user"
import { useLoginContext } from "../../contexts/login"
import { useTokenContext } from "../../contexts/token"
import logo from "../../img/logo_black.png"

export const RegistrationPage = () => {
  const navigate = useNavigate()
  const [error, setError] = useState(null)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [repeatPassword, setRepeatPassword] = useState("")
  const [disabled, setDisabled] = useState()
  

  const { setCurrentUser } = useUserContext()
  const { toggleLogin } = useLoginContext()
  const { setToken } = useTokenContext();

  const handleRegister = async () => {
    try {
      setDisabled(true)
      const user = await registration({ email, password })
      if (user.email) {
        if (user.email !== email) {
          setError(user.email[0])
        }
      }

      if (user.password) {
        if (user.password !== password) {
          setError(user.password[0])
        }
      }

      if (user.email === email && user.id) {
        setCurrentUser(user)
        toggleLogin(true)
        navigate("/")
      }
    } catch (error) {
      console.log(error.message)
      setError(error.message)
    } finally {
      setDisabled(false)
      const token = await getToken(login, password);
      setToken(token);
      localStorage.setItem('refresh', token.refresh);
    }
  }

  const registerClick = () => {
    if (email?.length === 0) {
      setError("Введите логин")
    } else if (password?.length === 0) {
      setError("Введите пароль")
    } else if (repeatPassword?.length === 0) {
      setError("Введите повторный пароль")
    } else if (repeatPassword !== password) {
      setError("Введенные пароли отличаются")
    } else {
      handleRegister()
    }
  }

  useEffect(() => {
    setError(null)
  }, [email, password, repeatPassword])

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
          <S.ModalInput
            type="password"
            name="repeat-password"
            placeholder="Повторите пароль"
            value={repeatPassword}
            onChange={(event) => {
              setRepeatPassword(event.target.value)
            }}
          />
        </S.Inputs>
        {error && <S.Error>{error}</S.Error>}
        <S.Buttons>
          <S.PrimaryButton onClick={() => registerClick()} disabled={disabled}>
            Зарегистрироваться
          </S.PrimaryButton>
        </S.Buttons>
      </S.ModalForm>
    </S.PageContainer>
  )
}
