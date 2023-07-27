import { MainPlaylistItem } from "./playlistItem"
import classes from "./playlist.module.css"

export const MainPlaylist = ({ getTracksError, tracks, loading, setCurrentTrack }) => {
 
 

  const elements =  tracks && tracks.map((item) => {
    return (
      <div onClick={() => setCurrentTrack(item)} key={item.id}>
        <MainPlaylistItem
          id={item.id}
          name={item.name}
          author={item.author}
          releaseDate={item.release_date}
          genre={item.genre}
          durationInSeconds={item.duration_in_seconds}
          album={item.album}
          logo={item.logo}
          trackFile={item.track_file}
        />
      </div>
    )
  })

  return (
    <>
      {getTracksError ? "не удалось загрузить плейлист, попробуйте позже" : null}
      {loading ? "loading" : <div className={classes.playlist}>{elements}</div>}
    </>
  )
}
