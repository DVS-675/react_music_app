import { PlayerControls } from "./playerControls/playerControls"
import { PlayerContentTrack } from "./playerTrack/playerTrack"

 export const PlayerContent = ({loading}) => {
  return (
    <>
      <PlayerControls />
      <PlayerContentTrack loading={loading}/>
    </>
  )
}


