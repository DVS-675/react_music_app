import { Bar } from "../../../components/bar/bar"
import { MainContent } from "../mainContent/mainContent"
import { useParams } from "react-router-dom"
import classes from "./playlist.module.css"
import { getTracksPlaylist } from "../../../api"
import { useEffect } from "react"

export const Playlist = ({
  tracks,
  setTracks,
  currentTrack,
  setCurrentTrack,
  getTracksError,
  setGetTracksError,   
  loading,
  setLoading,
}) => {
  const params = useParams()
  console.log(params.id)
  
  useEffect(() => {
    console.log("1")
    setLoading(true)
    getTracksPlaylist(params.id)
      .then((tracks) => {
        setLoading(false)        
        setTracks(tracks.items)       
      })
      .catch((error) => {
        setGetTracksError(error.message)
        setLoading(false)
      })
  }, [])
  
  console.log(tracks)
  console.log(getTracksError)

  return (
    <div className={classes.container}>
      <MainContent
        getTracksError={getTracksError}
        loading={loading}
        tracks={tracks}
        setCurrentTrack={setCurrentTrack}
      />
      <Bar currentTrack={currentTrack} loading={loading} />
      <footer />
    </div>
  )
}
