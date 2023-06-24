import {ReactComponent as Play} from '../../../../../img/icon/play.svg'
import {ReactComponent as Prev} from '../../../../../img/icon/prev.svg'
import {ReactComponent as Next} from '../../../../../img/icon/next.svg'
import {ReactComponent as Repeat} from '../../../../../img/icon/repeat.svg'
import {ReactComponent as Shuffle} from '../../../../../img/icon/shuffle.svg'

function BarPlayerControls() {
  return (
    <div className="player__controls">
      <div className="player__btn-prev">
        <svg className="player__btn-prev-svg" alt="prev">
          <Prev/>
        </svg>
      </div>
      <div className="player__btn-play _btn">
        <svg className="player__btn-play-svg" alt="play">
          <Play/>
        </svg>
      </div>
      <div className="player__btn-next">
        <svg className="player__btn-next-svg" alt="next">
          <Next/>
        </svg>
      </div>
      <div className="player__btn-repeat _btn-icon">
        <svg className="player__btn-repeat-svg" alt="repeat">
          <Repeat/>
        </svg>
      </div>
      <div className="player__btn-shuffle _btn-icon">
        <svg className="player__btn-shuffle-svg" alt="shuffle">
          <Shuffle/>
        </svg>
      </div>
    </div>
  )
}

export default BarPlayerControls
