/* eslint-disable arrow-body-style */
import MainCenterPlaylistItem from "./mainCenterPlaylistItem"

function MainCenterPlaylist({ loading, data }) {
  const elements = data.map((item) => {
    return (
      <MainCenterPlaylistItem
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
    )
  })

  return <div className="content__playlist playlist">{elements}</div>
}

export default MainCenterPlaylist
