import PlayerControls from "./playerControls/playerControls"
import PlayerContentTrack from "./playerTrack/playerTrack"

function PlayerContent({loading}) {
  return (
    <>
      <PlayerControls />
      <PlayerContentTrack loading={loading}/>
    </>
  )
}

export default PlayerContent
