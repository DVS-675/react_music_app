
import { PlayerControls } from "./playerControls/playerControls"
import { PlayerContentTrack } from "./playerTrack/playerTrack"

export const PlayerContent = ({
  currentTime,
  audioRef,
  loading,
  currentTrack,
  playTrack
}) => {
  
  return (
    <>
      <PlayerControls
        playTrack={playTrack}
        currentTime={currentTime}
        audioRef={audioRef}
      />
      <PlayerContentTrack playTrack={playTrack} loading={loading} />
    </>
  )
}
