import playlist01 from "../../../../img/playlist01.png"
import playlist02 from "../../../../img/playlist02.png"
import playlist03 from "../../../../img/playlist03.png"
import classes from "./mainSidebarBlockItem.module.css"

function MainSidebarBlockItem() {
  return (
    <>
      <div className={classes.item}>
        <a className={classes.link} href="£">
          <img
            className={classes.img}
            src={`${playlist01}`}
            alt="day's playlist"
          />
        </a>
      </div>
      <div className={classes.item}>
        <a className={classes.link} href="£">
          <img
            className={classes.img}
            src={`${playlist02}`}
            alt="day's playlist"
          />
        </a>
      </div>
      <div className={classes.item}>
        <a className={classes.link} href="£">
          <img
            className={classes.img}
            src={`${playlist03}`}
            alt="day's playlist"
          />
        </a>
      </div>
    </>
  )
}

export default MainSidebarBlockItem
