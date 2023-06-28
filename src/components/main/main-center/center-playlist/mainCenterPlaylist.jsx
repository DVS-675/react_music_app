import MainCenterPlaylistItem from "./mainCenterPlaylistItem"

function MainCenterPlaylist({ loading }) {
  return (
    <div className="content__playlist playlist">
      <MainCenterPlaylistItem loading={loading} />
    </div>
  )
}

export default MainCenterPlaylist
