import { MainSidebarBlock } from "./mainSidebarBlock/mainSidebarBlock"
import classes from "./mainSidebar.module.css"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useLoginContext } from "../../../contexts/login"
import { useUserContext } from "../../../contexts/user"
import { ReactComponent as Logout } from "../../../img/icon/logout.svg"

export const MainSidebar = () => {
  const [logout, setLogout] = useState(false)
  const navigate = useNavigate()
  const { toggleLogout } = useLoginContext()
  const { user } = useUserContext()

  useEffect(() => {
    if (logout === true) {
      toggleLogout(true)
      navigate("/login")
    }
  }),
    [logout]

  return (
    <div className={classes.sidebar}>
      <div className={classes.box}>
        <div className={classes.personal}>
          <p className={classes.name}>{user.username}</p>
          <div className={classes.avatar} />
        </div>
        <div
          className={classes.button}
          type="submit"
          onClick={() => {
            setLogout(true)
          }}
        >
          <Logout className={classes.button} alt="logout" />
        </div>
      </div>

      <MainSidebarBlock />
    </div>
  )
}
