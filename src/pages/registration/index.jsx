import classes from "./index.module.css"
import Logo from "../../img/logo_black.svg"
import { Link } from "react-router-dom"

export const Registration = () => {
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
          <input
            className={classes.input}
            type="password"
            placeholder="Повторите пароль"
          />
        </form>
        <Link className={classes.button} to="/login">
          Зарегистрироваться
        </Link>
      </div>
    </div>
  )
}
