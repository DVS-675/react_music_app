import { useState } from "react"
import { ReactComponent as Volume } from "../../../../img/icon/volume.svg"
import classes from "./playerVolume.module.css"

export const PlayerVolume = ({ audioRef }) => {
  const [volumeValue, setVolumeValue] = useState("1")
  const handlerOnChangeVolume = (e) => {
    setVolumeValue(e.target.value)
  }
  if (audioRef.current) audioRef.current.volume = parseFloat(volumeValue)

  return (
    <div className={classes.volume_block}>
      <div className={classes.volume_content}>
        <div className={classes.volume_image}>
          <Volume className={classes.volume_svg} alt="volume" />
        </div>
        <div className={`${classes.volume_progress} ${classes._btn}`}>
          <input
            className={`${classes.volume_progress_line} ${classes._btn}`}
            onInput={(e) => handlerOnChangeVolume(e)}
            type="range"
            name="range"
            id="volume"
            min="0"
            max="1"
            value={volumeValue}
            step="0.01"
          />
        </div>
      </div>
    </div>
  )
}
