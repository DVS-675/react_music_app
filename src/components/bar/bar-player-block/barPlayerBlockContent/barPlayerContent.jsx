import PlayerControls from "./barPlayerContentControls/barPlayerControls"
import PlayerContentTrack from "./barPlayerContentTrack/barPlayerContentTrack"

function PlayerContent({loading}) {
  return (
    <>
      <PlayerControls />
      <PlayerContentTrack loading={loading}/>
    </>
  )
}

export default PlayerContent
