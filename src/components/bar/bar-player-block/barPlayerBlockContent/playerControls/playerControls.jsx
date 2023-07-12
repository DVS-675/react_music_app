import { ReactComponent as Play } from "../../../../../img/icon/play.svg"
import { ReactComponent as Prev } from "../../../../../img/icon/prev.svg"
import { ReactComponent as Next } from "../../../../../img/icon/next.svg"
import { ReactComponent as Repeat } from "../../../../../img/icon/repeat.svg"
import { ReactComponent as Shuffle } from "../../../../../img/icon/shuffle.svg"
import classes from './playerControls.module.css'

function PlayerControls() {
  return (
    <div className={classes.controls}>
      <div className={classes.btn_prev}>
        <Prev className={classes.btn_prev_svg} alt="prev" />
      </div>
      <div className={`${classes.btn_play} ${classes._btn}`}>
        <Play className={classes.btn_play_svg} alt="play" />
      </div>
      <div className={classes.btn_next}>
        <Next className={classes.btn_next_svg} alt="next" />
      </div>
      <div className={`${classes.btn_repeat} ${classes._btn_icon}`}>
        <Repeat className={classes.btn_repeat_svg} alt="repeat" />
      </div>
      <div className={`${classes.btn_shuffle} ${classes._btn_icon}`}>
        <Shuffle className={classes.btn_shuffle_svg} alt="shuffle" />
      </div>
    </div>
  )
}

export default PlayerControls
