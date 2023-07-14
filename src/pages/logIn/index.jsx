import classes from "./index.module.css"
import Logo from "../../img/logo_black.svg"
import { Link } from "react-router-dom"
import Cookies from "js-cookie"

export const LogIn = () => {
  const AddToken = () => {
    Cookies.set("token", "dima")
  }
  return (
    <div className={classes.main}>
      <div className={classes.container}>
        <div className={classes.logo_box}>
          <img className={classes.logo_img} src={`${Logo}`} alt="logo" />
        </div>
        <form className={classes.form}>
          <input className={classes.input} type="text" placeholder="Логин" />
          <input
            className={classes.input}
            type="password"
            placeholder="Пароль"
          />
        </form>
        <div className={classes.button_box}>
          <Link onClick={AddToken} className={classes.button} to="/">
            Войти
          </Link>
          <Link className={classes.button_reg} to="/registration">
            Зарегистрироваться
          </Link>
        </div>
      </div>
    </div>
  )
}
