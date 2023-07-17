
import { MainPlaylistItem } from "./playlistItem"
import classes from "./playlist.module.css"

export const MainPlaylist = ({ data, loading }) => {
  
  const elements = data.map((item) => {
    return (
      <div key={item.id}>
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
          loading={loading}
        />
      </div>
    )
  })

  return <div className={classes.playlist}>{elements}</div>
}


