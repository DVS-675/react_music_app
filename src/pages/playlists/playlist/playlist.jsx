import { Bar } from "../../../components/bar/bar"
import { MainContent } from "../mainContent/mainContent"
import { useParams } from "react-router-dom"
import classes from "./playlist.module.css"
import { getTracksPlaylist } from "../../../api"

export const Playlist = (currentTrack, setCurrentTrack, error, loading) => {
  const params = useParams()
  const playlist = getTracksPlaylist.find(
    (playlist) => playlist.id === Number(params.id)
  )
  return (
    <div className={classes.container}>
      <MainContent
        error={error}
        loading={loading}
        title={playlist.title}
        data={playlist.items}
      />
      <Bar
        currentTrack={currentTrack}
        setCurrentTrack={setCurrentTrack}
        loading={loading}
      />
      <footer />
    </div>
  )
}
