import { PlayerControls } from "./playerControls/playerControls"
import { PlayerContentTrack } from "./playerTrack/playerTrack"

export const PlayerContent = ({
  currentTime,
  audioRef,
  loading,
  currentTrack,
}) => {
  return (
    <>
      <PlayerControls
        currentTime={currentTime}
        audioRef={audioRef}
        currentTrack={currentTrack}
      />
      <PlayerContentTrack loading={loading} />
    </>
  )
}
