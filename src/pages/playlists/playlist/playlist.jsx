import { Bar } from "../../../components/bar/bar"
import { MainContent } from "../mainContent/mainContent"
import { useParams } from "react-router-dom"
import classes from "./playlist.module.css"
import { getTracksPlaylist } from "../../../api"
import { useEffect } from "react"

export const Playlist = (currentTrack, setCurrentTrack, error, loading, tracks, setTracks, setLoading) => {
  const params = useParams()

  useEffect(() => {
    console.log("1")
    setLoading(true)
    getTracksPlaylist()
      .then((tracks) => {
        setLoading(false)
        console.log(tracks)
        setTracks(tracks)
      })
      .catch((error) => {
        setGetTracksError(error.message)
        setLoading(false)
      })
  }, [])

  const playlist = tracks.find(
    (playlist) => playlist.id === Number(params.id)
  )
  return (
    <div className={classes.container}>
      <MainContent
        error={error}
        loading={loading}
        title={playlist.title}
        tracks={playlist.items}
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
