import { ReactComponent as Note } from "../../../../img/icon/note.svg"
import { ReactComponent as Like } from "../../../../img/icon/like.svg"
import Skeleton from "../../../skeleton/skeleton.jsx"
import formatTime from "../../../../utils/utils"

function MainCenterPlaylistItem({
  loading,
  name,
  author,
  album,
  durationInSeconds,
}) {
  return (
    <div>
      {loading ? (
        <div className="playlist__item">
          <div className="playlist__track track">
            <div className="track__title">
              <div className="track__title-image">
                <Note className="track__title-svg" alt="music" />
              </div>
              <div className="track__title-text">
                <a className="track__title-link" href="http://">
                  <Skeleton width="150px" height="20px" />
                  <span className="track__title-span" />
                </a>
              </div>
            </div>
            <div className="track__author">
              <a className="track__author-link" href="http://">
                <Skeleton width="120px" height="20px" />
              </a>
            </div>
            <div className="track__album">
              <a className="track__album-link" href="http://">
                <Skeleton width="100px" height="20px" />
              </a>
            </div>
            <div className="track__time">
              <Skeleton width="50px" height="20px" />
            </div>
          </div>
        </div>
      ) : (
        <div className="playlist__item">
          <div className="playlist__track track">
            <div className="track__title">
              <div className="track__title-image">
                <Note className="track__title-svg" alt="music" />
              </div>
              <div className="track__title-text">
                <a className="track__title-link" href="http://">
                  {name} <span className="track__title-span" />
                </a>
              </div>
            </div>
            <div className="track__author">
              <a className="track__author-link" href="http://">
                {author}
              </a>
            </div>
            <div className="track__album">
              <a className="track__album-link" href="http://">
                {album}
              </a>
            </div>
            <div className="track__time">
              <Like className="track__time-svg" alt="time" />
              <span className="track__time-text">{formatTime(durationInSeconds)}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default MainCenterPlaylistItem
