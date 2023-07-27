import { BarPlayerBlock } from "./bar-player-block/barPlayerBlock"
import classes from "./bar.module.css"

export const Bar = ({ loading, currentTrack }) => {
  return (
    <>
      {currentTrack ? (
        <div className={classes.bar}>
          <div className={classes.content}>
            <div className={classes.player_progress} />
            <BarPlayerBlock currentTrack={currentTrack} loading={loading} />
          </div>
        </div>
      ) : null}
    </>
  )
}
