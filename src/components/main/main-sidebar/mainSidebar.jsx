import  { MainSidebarBlock } from "./mainSidebarBlock/mainSidebarBlock"
import classes from "./mainSidebar.module.css"

export const MainSidebar = () => {
  return (
    <div className={classes.sidebar}>
      <div className={classes.personal}>
        <p className={classes.name}>Sergey.Ivanov</p>
        <div className={classes.avatar} />
      </div>
      <MainSidebarBlock />
    </div>
  )
}


