import { PlayerContent } from "./barPlayerBlockContent/playerContent"
import { PlayerVolume } from "./playerVolume.jsx/playerVolume"
import classes from './barPlayerBlock.module.css'

export const BarPlayerBlock = ({loading, currentTrack}) => {
  return (
    <div className={classes.player_box}>
      <div className={classes.player}>
        <PlayerContent currentTrack={currentTrack} loading={loading}/>
      </div>
      <PlayerVolume />
    </div>
  )
}


