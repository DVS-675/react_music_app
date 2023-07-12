import playlist01 from "../../../../img/playlist01.png"
import playlist02 from "../../../../img/playlist02.png"
import playlist03 from "../../../../img/playlist03.png"
import classes from "./mainSidebarBlockItem.module.css"
import { Link } from "react-router-dom"

function MainSidebarBlockItem() {
  return (
    <>
      <div className={classes.item}>
        <Link className={classes.link} to="/playlist1">
          <img
            className={classes.img}
            src={`${playlist01}`}
            alt="day's playlist"
          />
        </Link>
      </div>
      <div className={classes.item}>
        <Link className={classes.link} to="/playlist2">
          <img
            className={classes.img}
            src={`${playlist02}`}
            alt="day's playlist"
          />
        </Link>
      </div>
      <div className={classes.item}>
        <Link className={classes.link} to="/playlist3">
          <img
            className={classes.img}
            src={`${playlist03}`}
            alt="day's playlist"
          />
        </Link>
      </div>
    </>
  )
}

export default MainSidebarBlockItem
