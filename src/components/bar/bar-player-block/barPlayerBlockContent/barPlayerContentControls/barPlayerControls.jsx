import { ReactComponent as Play } from "../../../../../img/icon/play.svg"
import { ReactComponent as Prev } from "../../../../../img/icon/prev.svg"
import { ReactComponent as Next } from "../../../../../img/icon/next.svg"
import { ReactComponent as Repeat } from "../../../../../img/icon/repeat.svg"
import { ReactComponent as Shuffle } from "../../../../../img/icon/shuffle.svg"

function PlayerControls() {
  return (
    <div className="player__controls">
      <div className="player__btn-prev">
        <Prev className="player__btn-prev-svg" alt="prev" />
      </div>
      <div className="player__btn-play _btn">
        <Play className="player__btn-play-svg" alt="play" />
      </div>
      <div className="player__btn-next">
        <Next className="player__btn-next-svg" alt="next" />
      </div>
      <div className="player__btn-repeat _btn-icon">
        <Repeat className="player__btn-repeat-svg" alt="repeat" />
      </div>
      <div className="player__btn-shuffle _btn-icon">
        <Shuffle className="player__btn-shuffle-svg" alt="shuffle" />
      </div>
    </div>
  )
}

export default PlayerControls
