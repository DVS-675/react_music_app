import { ReactComponent as Watch } from "../../../../img/icon/watch.svg"
import Skeleton from "../../../skeleton/skeleton"
import classes from "./centerHeader.module.css"

function CenterHeader({ loading }) {
  return (
    <div>
      {loading ? (
        <div className={classes.header}>
          <div className={`${classes.header_item} ${classes.col01}`}>
            <Skeleton width="100px" height="20px" />
          </div>
          <div className={`${classes.header_item} ${classes.col02}`}>
            <Skeleton width="100px" height="20px" />
          </div>
          <div className={`${classes.header_item} ${classes.col03}`}>
            <Skeleton width="100px" height="20px" />
          </div>
          <div className={`${classes.header_item} ${classes.col04}`}>
            <Watch className="playlist-title__svg" alt="time" />
          </div>
        </div>
      ) : (
        <div className={classes.header}>
          <div className={`${classes.header_item} ${classes.col01}`}>Трек</div>
          <div className={`${classes.header_item} ${classes.col02}`}>
            ИСПОЛНИТЕЛЬ
          </div>
          <div className={`${classes.header_item} ${classes.col03}`}>
            АЛЬБОМ
          </div>
          <div className={`${classes.header_item} ${classes.col04}`}>
            <Watch className={classes.hearer_svg} alt="time" />
          </div>
        </div>
      )}
    </div>
  )
}

export default CenterHeader
