import classes from "./App.module.css"
import AppRoutes from "./routes"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { LoginContext } from "./contexts/login"
import { UserContext } from "./contexts/user"
import { IsPlayingContext } from "./contexts/isPlaying"
import { registration, getAccessToken, getFavoritesTracks } from "./api"
import { TokenContext } from "./contexts/token"
import { SwitchPlaylistContext } from "./contexts/switchPlaylist"
import { useGetAllTracksQuery } from "./services/tracks"
import { TracksContext } from "./contexts/tracks"

import {
  setTracksIds,
  setFavoritesTracks,
  setPlayTrack,
  setCurrentPlaylist,
} from "./store/actions/creators/tracks"
import { createFavorites } from "./utils/playerHelpers"

function App() {
  const [auth, setAuth] = useState(localStorage.getItem("login"))
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")))
  const [token, setToken] = useState()
  const [switchPlaylist, setSwitchPlaylist] = useState(false)
  const refresh = localStorage.getItem("refresh")
  const [isPlaying, setIsPlaying] = useState(false)
  const [intervalId, setIntervalId] = useState(null)
  const { error, isLoading } = useGetAllTracksQuery()
  const favoritesTracks = useSelector((store) => store.tracks.favoritesTracks)
  const allTracks = useGetAllTracksQuery().data
  const [playlist, setPlaylist] = useState()
  const playTrack = useSelector((store) => store.tracks.playTrack)
  const currentPlaylist = useSelector((store) => store.tracks.currentPlaylist)

  const [loading, setLoading] = useState(false)

  const dispatch = useDispatch()

  let errorMessage

  if (error) {
    errorMessage = `Не удалось загрузить плейлист, попробуйте позже ${error.status}`
  }

  const toggleLogin = () => {
    if (!auth) {
      setAuth(true)
      localStorage.setItem("login", true)
    }
  }

  const toggleLogout = () => {
    setAuth(false)
    localStorage.clear()
    clearInterval(intervalId)
    dispatch(setPlayTrack(null))
    dispatch(setFavoritesTracks([]))
  }

  const setCurrentUser = (currUser) => {
    setUser(currUser)
    localStorage.setItem("user", JSON.stringify(currUser))
  }

  useEffect(() => {
    if (switchPlaylist) {
      setPlaylist(currentPlaylist)
    }
  }, [switchPlaylist])

  useEffect(() => {
    const setTokenAfterUnload = async () => {
      setToken(await getAccessToken(refresh))
    }

    if (!token?.access && refresh) {
      setTokenAfterUnload()
    }
    const getNewFavoritesTracks = async () => {
      dispatch(setFavoritesTracks(await getFavoritesTracks(token.access)))
    }

    if (token?.access) {
      getNewFavoritesTracks()
    }
  }, [token])

  useEffect(() => {
    if (favoritesTracks.length === 0) {
      dispatch(setCurrentPlaylist(allTracks))
      setPlaylist(allTracks)
      dispatch(setTracksIds(allTracks?.map((trackData) => trackData.id)))
    }
  }, [favoritesTracks])

  useEffect(() => {
    dispatch(setFavoritesTracks(createFavorites(allTracks, user)))
  }, [user])

  useEffect(() => {
    if (allTracks) {
      dispatch(setTracksIds(allTracks.map((trackData) => trackData.id)))
    }
    dispatch(setCurrentPlaylist(allTracks))
    setPlaylist(allTracks)
  }, [allTracks])

  useEffect(() => {
    if (auth && refresh) {
      setIntervalId(
        setInterval(async () => {
          setToken(await getAccessToken(refresh))
        }, 60000)
      )
    }
  }, [refresh])

  const toggleIsPlaying = (value) => {
    setIsPlaying(value)
  }

  return (
    <div className={classes.wrapper}>
      <TokenContext.Provider value={{ token, setToken }}>
        <IsPlayingContext.Provider value={{ isPlaying, toggleIsPlaying }}>
          <TracksContext.Provider
            value={isLoading ? Array(5).fill({}) : playlist}
          >
            <LoginContext.Provider value={{ auth, toggleLogin, toggleLogout }}>
              <UserContext.Provider value={{ user, setCurrentUser }}>
                <SwitchPlaylistContext.Provider
                  value={{ switchPlaylist, setSwitchPlaylist }}
                >
                  <AppRoutes
                    auth={auth}
                    errorMessage={errorMessage}
                    loading={isLoading}
                    registerUser={registration}
                    setAuth={setAuth}
                  />
                </SwitchPlaylistContext.Provider>
              </UserContext.Provider>
            </LoginContext.Provider>
          </TracksContext.Provider>
        </IsPlayingContext.Provider>
      </TokenContext.Provider>
    </div>
  )
}

export default App
