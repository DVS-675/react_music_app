import PlayerContent from "./barPlayerBlockContent/playerContent"
import PlayerVolume from "./playerVolume.jsx/playerVolume"
import classes from './barPlayerBlock.module.css'

function BarPlayerBlock({loading}) {
  return (
    <div className={classes.player_box}>
      <div className={classes.player}>
        <PlayerContent loading={loading}/>
      </div>
      <PlayerVolume />
    </div>
  )
}

export default BarPlayerBlock
