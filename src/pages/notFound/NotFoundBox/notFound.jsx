import { Link } from "react-router-dom"
import classes from "./notFound.module.css"
import { ReactComponent as Smile } from "../../../img/smile_crying.svg"

export const NotFoundBox = () => {
  return (
    <div className={classes.box}>
      <h1 className={classes.title}>404</h1>
      <div className={classes.subtitle_box}>
        <h3 className={classes.subtitle}>Страница не найдена</h3>
        <Smile className={classes.img} />
      </div>
      <p className={classes.text}>
        Возможно, она была удалена<br/> или перенесена на другой адрес
      </p>
      <Link className={classes.button} to="/">
        Вернуться на главную
      </Link>
    </div>
  )
}
