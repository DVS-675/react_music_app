import { ReactComponent as Play } from "../../../../../img/icon/play.svg"
import { ReactComponent as Prev } from "../../../../../img/icon/prev.svg"
import { ReactComponent as Next } from "../../../../../img/icon/next.svg"
import { ReactComponent as Repeat } from "../../../../../img/icon/repeat.svg"
import { ReactComponent as Shuffle } from "../../../../../img/icon/shuffle.svg"
import { ReactComponent as Pause } from "../../../../../img/icon/pause.svg"
import classes from "./playerControls.module.css"
import { useState } from "react"

export const PlayerControls = ({ audioRef }) => {
  const [playerState, setPlayerState] = useState({
    isPaused: false,
    isLoop: false,
  })
  if (audioRef.current) audioRef.current.loop = playerState.isLoop

  console.log(playerState.isLoop)

  const handlerOnPlay = () => {
    audioRef.current.play()
    setPlayerState({ ...playerState, isPaused: false })
  }

  const handlerOnPause = () => {
    audioRef.current.pause()
    setPlayerState({ ...playerState, isPaused: true })
  }

  const handlerOnLoop = () => {
    setPlayerState({ ...playerState, isLoop: !playerState.isLoop })
  }

  return (
    <div className={classes.controls}>
      <div className={classes.btn_prev}>
        <Prev className={classes.btn_prev_svg} alt="prev" />
      </div>
      {playerState.isPaused ? (
        <div
          onClick={() => handlerOnPlay()}
          className={`${classes.btn_pause} ${classes._btn}`}
        >
          <Play className={classes.btn_play_svg} alt="play" />
        </div>
      ) : (
        <div
          onClick={() => handlerOnPause()}
          className={`${classes.btn_play} ${classes._btn}`}
        >
          <Pause className={classes.btn_pause_svg} alt="pause" />
        </div>
      )}
      <div className={classes.btn_next}>
        <Next className={classes.btn_next_svg} alt="next" />
      </div>
      <div
        onClick={() => handlerOnLoop()}
        className={`${classes.btn_repeat} ${classes._btn_icon}`}
      >
        <Repeat
          className={
            playerState.isLoop
              ? `${classes.btn_repeat_svg_active}`
              : `${classes.btn_repeat_svg}`
          }
          alt="repeat"
        />
      </div>
      <div className={`${classes.btn_shuffle} ${classes._btn_icon}`}>
        <Shuffle className={classes.btn_shuffle_svg} alt="shuffle" />
      </div>
    </div>
  )
}
