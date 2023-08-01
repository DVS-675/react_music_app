import { BarPlayerBlock } from "./bar-player-block/barPlayerBlock"
import { BarPlayerProgress } from "./bar-player-progress/BarPlayerProgress"
import classes from "./bar.module.css"
import { useRef } from "react"

export const Bar = ({ loading, currentTrack }) => {
  const audioRef = useRef(null)
  return (
    <>
      {currentTrack ? (
        <div className={classes.bar}>
          <div className={classes.content}>
            <BarPlayerProgress audioRef={audioRef} />
            <BarPlayerBlock
              audioRef={audioRef}
              currentTrack={currentTrack}
              loading={loading}
            />
            <audio ref={audioRef} src={currentTrack.track_file} />
          </div>
        </div>
      ) : null}
    </>
  )
}
