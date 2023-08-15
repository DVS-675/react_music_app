import { Bar } from "../../../components/bar/bar"
import { MainContent } from "../mainContent/mainContent"
import classes from "./favorites.module.css"
import { useEffect } from "react"
import { TracksContext } from "../../../contexts/tracks"
import { useSelector, useDispatch } from "react-redux"

import {
  setTracksIds,
  setCurrentPlaylist,
} from "../../../store/actions/creators/tracks"
import { useSwitchPlaylistContext } from "../../../contexts/switchPlaylist"

export const Favorites = () => {
  const dispatch = useDispatch()
  const favoritesTracks = useSelector((store) => store.tracks.favoritesTracks)
  const { switchPlaylist, setSwitchPlaylist } = useSwitchPlaylistContext()
  useEffect(() => {
    if (favoritesTracks) {
      if (switchPlaylist) {
        dispatch(setCurrentPlaylist(favoritesTracks))
        dispatch(setTracksIds(favoritesTracks.map((trackData) => trackData.id)))
        setSwitchPlaylist(false)
      }
    }
  }, [favoritesTracks, switchPlaylist])

  return (
    <div className={classes.container}>
      <TracksContext.Provider value={favoritesTracks}>
        <MainContent />
      </TracksContext.Provider>
      <Bar />
      <footer />
    </div>
  )
}
