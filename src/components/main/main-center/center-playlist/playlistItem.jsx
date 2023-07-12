import { ReactComponent as Note } from "../../../../img/icon/note.svg"
import { ReactComponent as Like } from "../../../../img/icon/like.svg"
import Skeleton from "../../../skeleton/skeleton.jsx"
import formatTime from "../../../../utils/utils"
import classes from "./playlistItem.module.css"

function MainPlaylistItem({ loading, name, author, album, durationInSeconds }) {
  return (
    <div>
      {loading ? (
        <div className={classes.item}>
          <div className={classes.track}>
            <div className={classes.track_title}>
              <div className={classes.track_image}>
                <Note className={classes.track_svg} alt="music" />
              </div>
              <div>
                <a className={classes.track_link} href="http://">
                  <Skeleton width="150px" height="20px" />
                  <span className={classes.track_span} />
                </a>
              </div>
            </div>
            <div className={classes.author}>
              <a className={classes.author_link} href="http://">
                <Skeleton width="120px" height="20px" />
              </a>
            </div>
            <div className={classes.album}>
              <a className={classes.album_link} href="http://">
                <Skeleton width="100px" height="20px" />
              </a>
            </div>
            <div>
              <Skeleton width="50px" height="20px" />
            </div>
          </div>
        </div>
      ) : (
        <div className={classes.item}>
          <div className={classes.track}>
            <div className={classes.track_title}>
              <div className={classes.track_image}>
                <Note className={classes.track_svg} alt="music" />
              </div>
              <div>
                <a className={classes.track_link} href="http://">
                  {name} <span className={classes.track_span} />
                </a>
              </div>
            </div>
            <div className={classes.author}>
              <a className={classes.author_link} href="http://">
                {author}
              </a>
            </div>
            <div className={classes.album}>
              <a className={classes.album_link} href="http://">
                {album}
              </a>
            </div>
            <div>
              <Like className={classes.time_svg} alt="time" />
              <span className={classes.time_text}>
                {formatTime(durationInSeconds)}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default MainPlaylistItem
