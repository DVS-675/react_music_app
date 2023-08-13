import classes from "./App.module.css"
import AppRoutes from "./routes"
import { useEffect, useState } from "react"
import { getTracks } from "./api"
import { useDispatch, useSelector } from "react-redux"

import { registration } from "./api"
import { LoginContext } from "./contexts/login"
import { UserContext } from "./contexts/user"
import { IsPlayingContext } from "./contexts/isPlaying"
import { registerUser, getAccessToken, getFavoritesTracks } from "./api"
import { TokenContext } from "./contexts/token"
import { SwitchPlaylistContext } from "./contexts/switchPlaylist"
import { useGetAllTracksQuery } from "./services/tracks"


import {
  setTracksIds,
  fetchTracksFavorite,
  setPlayTrack,
  fetchTracksPlaylist,
} from "./store/actions/creators/tracks"
import { createFavorites } from "./utils/playerHelpers"

function App() {
  const [auth, setAuth] = useState(localStorage.getItem("login"))
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")))
  const [tracks, setTracks] = useState([])
  const [loading, setLoading] = useState(false)
  const [getTracksError, setGetTracksError] = useState(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [token, setToken] = useState()
  const [switchPlaylist, setSwitchPlaylist] = useState(false)
  const refresh = localStorage.getItem("refresh")
  const [intervalId, setIntervalId] = useState(null)
  const { error, isLoading } = useGetAllTracksQuery()
  const favoritesTracks = useSelector((store) => store.tracks.favoritesTracks)
  const allTracks = useGetAllTracksQuery().data
  const [playlist, setPlaylist] = useState()
  const playTrack = useSelector((store) => store.tracks.playTrack)
  const currentPlaylist = useSelector((store) => store.tracks.currentPlaylist)

  const dispatch = useDispatch()

  const toggleLogin = () => {
    if (!auth) {
      setAuth(true)
      localStorage.setItem("login", true)
    }
  }

  const toggleLogout = () => {
    setAuth(false)
    localStorage.clear()
    clearInterval(intervalId);
    dispatch(setPlayTrack(null));
    dispatch(setFavoritesTracks([]));
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
      dispatch(fetchTracksFavorite(await getFavoritesTracks(token.access)))
    }

    if (token?.access) {
      getNewFavoritesTracks()
    }
  }, [token])

  useEffect(() => {
    if (favoritesTracks.length === 0) {
      dispatch(fetchTracksPlaylist(allTracks))
      setPlaylist(allTracks)
      dispatch(setTracksIds(allTracks?.map((trackData) => trackData.id)))
    }
  }, [favoritesTracks])

  useEffect(() => {
    dispatch(fetchTracksFavorite(createFavorites(allTracks, user)))
  }, [user])

  useEffect(() => {
    if (allTracks) {
      dispatch(setTracksIds(allTracks.map((trackData) => trackData.id)))
    }
    dispatch(fetchTracksPlaylist(allTracks))
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

  useEffect(() => {
    setLoading(true)
    getTracks()
      .then((tracks) => {
        setLoading(false)
        setTracks(tracks)
        dispatch(setAllTracks(tracks))
        dispatch(setTracksIds(tracks.map((track) => track.id)))
      })
      .catch((error) => {
        setGetTracksError(error.message)
        setLoading(false)
      })
  }, [])

  const toggleIsPlaying = (value) => {
    setIsPlaying(value)
  }

  return (
    <div className={classes.wrapper}>
      <TokenContext.Provider value={{ token, setToken }}>
      <IsPlayingContext.Provider value={{ isPlaying, toggleIsPlaying }}>
        <LoginContext.Provider value={{ auth, toggleLogin, toggleLogout }}>
          <UserContext.Provider value={{ user, setCurrentUser }}>
          <SwitchPlaylistContext.Provider
                  value={{ switchPlaylist, setSwitchPlaylist }}
                >
            <AppRoutes
              auth={auth}
              setAuth={setAuth}
              registration={registration}
              getTracksError={getTracksError}
              setGetTracksError={setGetTracksError}
              tracks={tracks}
              loading={loading}
              setLoading={setLoading}
              user={user}
              setTracks={setTracks}
            />
            </SwitchPlaylistContext.Provider>
          </UserContext.Provider>
        </LoginContext.Provider>
      </IsPlayingContext.Provider>
      </TokenContext.Provider>
    </div>
  )
}

export default App
