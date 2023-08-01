
import classes from "./App.module.css"
import AppRoutes from "./routes"
import { useEffect, useState } from "react"
import { getTracks } from "./api"

import { registration } from "./api"
import { LoginContext } from "./contexts/login"
import { UserContext } from "./contexts/user"


function App() {
  const [auth, setAuth] = useState(localStorage.getItem("login"))
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")))
  const [tracks, setTracks] = useState([])
  const [loading, setLoading] = useState(false)
  const [getTracksError, setGetTracksError] = useState(null)
  const [currentTrack, setCurrentTrack] = useState(null)

  const toggleLogin = () => {
    if (!auth) {
      setAuth(true)
      localStorage.setItem("login", true)
    }
  }

  const toggleLogout = () => {
    setAuth(false)
    localStorage.clear()
  }

  const setCurrentUser = (currUser) => {
    setUser(currUser)
    localStorage.setItem("user", JSON.stringify(currUser))
  }

  useEffect(() => {
    setLoading(true)
    getTracks()
      .then((tracks) => {
        setLoading(false)
        setTracks(tracks)
      })
      .catch((error) => {
        setGetTracksError(error.message)
        setLoading(false)
      })
  }, [])

  return (
    <div className={classes.wrapper}>
      <LoginContext.Provider value={{ auth, toggleLogin, toggleLogout }}>
        <UserContext.Provider value={{ user, setCurrentUser }}>
          <AppRoutes
            auth={auth}
            setAuth={setAuth}
            registration={registration}
            currentTrack={currentTrack}
            setCurrentTrack={setCurrentTrack}
            getTracksError={getTracksError}
            setGetTracksError={setGetTracksError}
            tracks={tracks}
            loading={loading}
            setLoading={setLoading}
            user={user}
            setTracks={setTracks}
          />
        </UserContext.Provider>
      </LoginContext.Provider>
    </div>
  )
}

export default App
