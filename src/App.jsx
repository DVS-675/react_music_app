import Cookies from "js-cookie"
import classes from "./App.module.css"
import AppRoutes from "./routes"
import { useEffect, useState } from "react"
import { getTracks } from "./api"

const user = Cookies.get("token")
function App() {
  const [tracks, setTracks] = useState([])
  const [loading, setLoading] = useState(false)
  const [getTracksError, setGetTracksError] = useState(null)
  const [currentTrack, setCurrentTrack] = useState(null)

  useEffect(() => {
    console.log("1")
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
    <div className={classes.wrapper}>
      <AppRoutes
        currentTrack={currentTrack}
        setCurrentTrack={setCurrentTrack}
        error={getTracksError}
        tracks={tracks}
        loading={loading}
        setLoading={setLoading}
        user={user}
        setTracks={setTracks}
      />
    </div>
  )
}

export default App
