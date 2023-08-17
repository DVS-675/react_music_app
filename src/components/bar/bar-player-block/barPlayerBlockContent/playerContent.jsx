import { useSelector } from "react-redux";
import { PlayerControls } from "./playerControls/playerControls"
import { PlayerContentTrack } from "./playerTrack/playerTrack"

export const PlayerContent = ({
 
  volume,
  currentTime,
  setCurrentTime,
  setDuration,
  currentTimeUser,
  loading,
  audioRef,
}) => {
  const playTrack = useSelector((store) => {
    if (!store.tracks.playTrack) {
      return null;
    }
    return store.tracks.playTrack;
  });
  return (
    <>
      <PlayerControls
        loading={loading}
        volume={volume}
        
        setCurrentTime={setCurrentTime}
        setDuration={setDuration}
        currentTimeUser={currentTimeUser}
        currentTime={currentTime}
        audioRef={audioRef}
      />
      <PlayerContentTrack playTrack={playTrack} loading={loading} />
    </>
  )
}
