import { ReactComponent as Volume } from "../../../../img/icon/volume.svg"
import classes from "./playerVolume.module.css"

function PlayerVolume() {
  return (
    <div className={classes.volume_block}>
      <div className={classes.volume_content}>
        <div className={classes.volume_image}>
          <Volume className={classes.volume_svg} alt="volume" />
        </div>
        <div className={`${classes.volume_progress} ${classes._btn}`}>
          <input
            className={`${classes.volume_progress_line} ${classes._btn}`}
            type="range"
            name="range"
          />
        </div>
      </div>
    </div>
  )
}

export default PlayerVolume
