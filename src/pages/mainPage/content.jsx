import { getTracks } from "../../api"
import { Bar } from "../../components/bar/bar"
import { Main } from "../../components/main/main"
import classes from "./content.module.css"
import { useEffect, useState } from "react"

export const Container = () => {
  const [tracks, setTracks] = useState([])
  const [loading, setLoading] = useState(false)
  const [getTracksError, setGetTracksError] = useState(null)

  const [currentTrack, setCurrentTrack] = useState(null)  

  useEffect(() => {
    setLoading(true)
    getTracks()
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

  return (
    <div className={classes.container}>       
      <Main setCurrentTrack={setCurrentTrack} error={getTracksError} tracks={tracks} loading={loading} />      
      <Bar currentTrack={currentTrack} setCurrentTrack={setCurrentTrack} loading={loading} />
      <footer />
    </div>
  )
}
