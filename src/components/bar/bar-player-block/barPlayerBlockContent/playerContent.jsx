import { PlayerControls } from "./playerControls/playerControls"
import { PlayerContentTrack } from "./playerTrack/playerTrack"

export const PlayerContent = ({ audioRef, loading, currentTrack }) => {
  return (
    <>
      <PlayerControls audioRef={audioRef} currentTrack={currentTrack} />
      <PlayerContentTrack
        audioRef={audioRef}
        currentTrack={currentTrack}
        loading={loading}
      />
    </>
  )
}
