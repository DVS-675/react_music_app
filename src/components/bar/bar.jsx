import { BarPlayerBlock } from "./bar-player-block/barPlayerBlock"
import { BarPlayerProgress } from "./bar-player-progress/BarPlayerProgress"
import classes from "./bar.module.css"
import { useRef } from "react"
import {useSelector} from "react-redux";
import {playTrackSelector} from "../../store/selectors/tracks";

export const Bar = ({ loading, currentTrack }) => {
  const audioRef = useRef(null)
  const playTrack = useSelector(playTrackSelector)
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
            <audio ref={audioRef} src={playTrack.track_file} />
          </div>
        </div>
      ) : null}
    </>
  )
}
