import { PlayerContent } from "./barPlayerBlockContent/playerContent"
import { PlayerVolume } from "./playerVolume.jsx/playerVolume"
import classes from "./barPlayerBlock.module.css"


export const BarPlayerBlock = ({ audioRef, loading, currentTrack }) => {    

  return (
    <div className={classes.player_box}>
      <div className={classes.player}>
        <PlayerContent loading={loading} audioRef={audioRef} currentTrack={currentTrack} />
        
      </div>
      <PlayerVolume audioRef={audioRef}/>
    </div>
  )
}
