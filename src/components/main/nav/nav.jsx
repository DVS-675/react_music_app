import { useEffect, useState } from "react"
import Logo from "../../../img/logo.png"
import classes from "./nav.module.css"
import { Link, useNavigate } from "react-router-dom"
import { useLoginContext } from "../../../contexts/login"



export const Nav = () => {
  const [logout, setLogout] = useState(false)
  const navigate = useNavigate()
  const { toggleLogout } = useLoginContext()

  useEffect(() => {
    if (logout === true) {
      toggleLogout(true)
      navigate("/login")
    }
  }, [logout])

  const [visible, setVisible] = useState(false)
  const toggleVisibility = () => setVisible(!visible)

  const toggleVisibilityDown = (e) => {
    if (e.keyCode === 13) {
      toggleVisibility()
    }
  }

  return (
    <nav className={classes.nav}>
      <div className={classes.logo_box}>
        <img className={classes.logo_img} src={`${Logo}`} alt="logo" />
      </div>

      <div
        role="button"
        tabIndex={0}
        onClick={toggleVisibility}
        onKeyDown={toggleVisibilityDown}
        className={classes.burger}
      >
        <span className={classes.burger_line} />
        <span className={classes.burger_line} />
        <span className={classes.burger_line} />
      </div>
      {visible && (
        <div className={classes.menu}>
          <ul className={classes.menu_list}>
            <li className={classes.menu_item}>
              <Link className={classes.menu_link} to="/">
                Главное
              </Link>
            </li>
            <li className={classes.menu_item}>
              <Link className={classes.menu_link} to="/playlist/4">
                Мои треки
              </Link>
            </li>
            <li className={classes.menu_item}>
              <Link
                className={classes.menu_link}
                
                onClick={() => setLogout(true)}
              >
                Выйти
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}
