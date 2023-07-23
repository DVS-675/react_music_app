import { ReactComponent as Note } from "../../../../../img/icon/note.svg"
import { ReactComponent as Like } from "../../../../../img/icon/like.svg"
import { ReactComponent as Dislike } from "../../../../../img/icon/dislike.svg"
import { Skeleton } from "../../../../skeleton/skeleton.jsx"
import classes from "./playerTrack.module.css"

export const PlayerContentTrack = ({ loading, currentTrack }) => {
  return (
    <div className={classes.player}>
      <div className={classes.track}>
        {loading ? (
          <>
            <div className={classes.image}>
              <Skeleton width="51px" height="51px" />
            </div>
            <div className={classes.author}>
              <Skeleton width="40px" height="15px" />
            </div>
            <div className={classes.album}>
              <Skeleton width="40px" height="15px" />
            </div>
          </>
        ) : (
          <>
            <div className={classes.image}>
              <Note className={classes.svg} alt="music" />
            </div>
            <div className={classes.author}>
              <a className={classes.author_link}>{currentTrack.author}</a>
            </div>
            <div className={classes.album}>
              <a className={classes.album_link}>{currentTrack.album}</a>
            </div>
          </>
        )}
      </div>
      <div className={classes.like_dis}>
        <div className={`${classes.like} ${classes._btn_icon}`}>
          <Like className={classes.like_svg} alt="like" />
        </div>
        <div className={`${classes.dislike} ${classes._btn_icon}`}>
          <Dislike className={classes.dislike_svg} alt="dislike" />
        </div>
      </div>
    </div>
  )
}
