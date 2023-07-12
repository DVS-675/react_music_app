import BarPlayerBlock from "./bar-player-block/barPlayerBlock"
import classes from './bar.module.css'

function Bar({loading}) {
  return (
    <div className={classes.bar}>
      <div className={classes.content}>
        <div className={classes.player_progress} />
        <BarPlayerBlock loading={loading}/>
      </div>
    </div>
  )
}

export default Bar
