import { ReactComponent as Note } from "../../../../../img/icon/note.svg"
import { ReactComponent as Like } from "../../../../../img/icon/like.svg"
import { ReactComponent as Dislike } from "../../../../../img/icon/dislike.svg"

function PlayerContentTrack() {
  return (
    <div className="player__track-play track-play">
      <div className="track-play__contain">
        <div className="track-play__image">
          <Note className="track-play__svg" alt="music" />
        </div>
        <div className="track-play__author">
          <a className="track-play__author-link" href="http://">
            Ты та...
          </a>
        </div>
        <div className="track-play__album">
          <a className="track-play__album-link" href="http://">
            Баста
          </a>
        </div>
      </div>

      <div className="track-play__like-dis">
        <div className="track-play__like _btn-icon">
          <Like className="track-play__like-svg" alt="like" />
        </div>
        <div className="track-play__dislike _btn-icon">
          <Dislike className="track-play__dislike-svg" alt="dislike" />
        </div>
      </div>
    </div>
  )
}

export default PlayerContentTrack
