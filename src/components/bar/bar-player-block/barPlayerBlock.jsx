import { PlayerContent } from "./barPlayerBlockContent/playerContent"
import { PlayerVolume } from "./playerVolume.jsx/playerVolume"
import classes from "./barPlayerBlock.module.css"


export const BarPlayerBlock = ({ playTrack, currentTime,audioRef, loading, currentTrack }) => {    

  return (
    <div className={classes.player_box}>
      <div className={classes.player}>
        <PlayerContent playTrack={playTrack} currentTime={currentTime} loading={loading} audioRef={audioRef} />
        
      </div>
      <PlayerVolume audioRef={audioRef}/>
    </div>
  )
}
