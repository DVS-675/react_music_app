import { PlayerContent } from "./barPlayerBlockContent/playerContent"
import { PlayerVolume } from "./playerVolume.jsx/playerVolume"
import classes from "./barPlayerBlock.module.css"

export const BarPlayerBlock = ({
  loading,
  volume,
  setCurrentTime,
  setDuration,
  currentTimeUser,
  currentTime,
  setVolume,
  audioRef,
}) => {
  return (
    <div className={classes.player_box}>
      <div className={classes.player}>
        <PlayerContent
          
          volume={volume}
          currentTime={currentTime}
          setCurrentTime={setCurrentTime}
          setDuration={setDuration}
          currentTimeUser={currentTimeUser}
          loading={loading}
          audioRef={audioRef}
        />
      </div>
      <PlayerVolume setVolume={setVolume} audioRef={audioRef} />
    </div>
  )
}
