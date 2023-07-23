import { PlayerControls } from "./playerControls/playerControls"
import { PlayerContentTrack } from "./playerTrack/playerTrack"

 export const PlayerContent = ({loading, currentTrack}) => {
  return (
    <>
      <PlayerControls />
      <PlayerContentTrack currentTrack={currentTrack} loading={loading}/>
    </>
  )
}


