import { BarPlayerBlock } from "./bar-player-block/barPlayerBlock"
import { BarPlayerProgress } from "./bar-player-progress/BarPlayerProgress"
import classes from "./bar.module.css"
import { useRef, useState } from "react"
import { useSelector } from "react-redux"

export const Bar = ({ loading }) => {
  const audioRef = useRef(null)

  const playTrack = useSelector((store) => {
    if (!store.tracks.playTrack) {
      return null
    }
    return store.tracks.playTrack
  })

  const [volume, setVolume] = useState(50)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [currentTimeUser, setCurrentTimeUser] = useState(0)

  return (
    <>
      {playTrack?.id ? (
        <div className={classes.bar}>
          <div className={classes.content}>
            <BarPlayerProgress
              audioRef={audioRef}
              currentTime={currentTime}
              setCurrentTime={setCurrentTime}
              setCurrentTimeUser={setCurrentTimeUser}
              duration={duration}
            />
            <BarPlayerBlock
            
              loading={loading}
              volume={volume}
              setVolume={setVolume}
              setCurrentTime={setCurrentTime}
              setDuration={setDuration}
              currentTime={currentTime}
              currentTimeUser={currentTimeUser}
              audioRef={audioRef}
            />
            <audio ref={audioRef} src={playTrack.track_file} />
          </div>
        </div>
      ) : null}
    </>
  )
}
