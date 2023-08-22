import { MainPlaylistItem } from "./playlistItem"
import classes from "./playlist.module.css"
import { setPlayTrack } from "../../../../store/actions/creators/tracks"
import { useDispatch, useSelector } from "react-redux"

import { useIsPlayingContext } from "../../../../contexts/isPlaying"
import { useEffect, useState } from "react"
import { useTracksContext } from "../../../../contexts/tracks"
import {
  setLikesState,
  setFavoritesTracks,
} from "../../../../store/actions/creators/tracks"
import { useTokenContext } from "../../../../contexts/token"

import {
  deleteTrackInFavorites,
  addTrackInFavorites,
  getTracks,
  getFavoritesTracks,
} from "../../../../api"
import { useSwitchPlaylistContext } from "../../../../contexts/switchPlaylist"
import { createFavorites } from "../../../../utils/playerHelpers"

export const MainPlaylist = ({ errorMessage, loading }) => {
  const dispatch = useDispatch()
  const { token } = useTokenContext()
  const [trackClick, setTrackClick] = useState(false)
  const favoritesTracks = useSelector((store) => store.tracks.favoritesTracks)
  console.log(token)
  const favoritesIds = favoritesTracks.map((favoriteTrack) => favoriteTrack.id)
  const tracksIds = useSelector((store) => store.tracks.tracksIds)
  const likesState = useSelector((store) => store.tracks.likesState)
  const initialState = {}

  const user = localStorage.getItem("user")
  const { setSwitchPlaylist } = useSwitchPlaylistContext()

  useEffect(() => {
    if (trackClick) {
      setSwitchPlaylist(true)
      setTrackClick(false)
    } else {
      setTrackClick(false)
    }
  }, [trackClick])

  const tracks = useTracksContext()
  console.log(tracks)

  const getNewFavoritesTracks = async () => {
    dispatch(setFavoritesTracks(await getFavoritesTracks(token.access)))
  }

  const toggleLike = async (event) => {
    const { id } = event.currentTarget
    const value = likesState[id]
    const newLikesState = { ...likesState }

    if (value) {
      newLikesState[id] = false
      await deleteTrackInFavorites(token?.access, id)

      if (token?.access) {
        await getNewFavoritesTracks()
      }
    } else {
      newLikesState[id] = true
      await addTrackInFavorites(token?.access, id)

      if (token?.access) {
        await getNewFavoritesTracks()
      }
    }

    dispatch(setLikesState(newLikesState))
  }

  useEffect(() => {
    if (tracksIds) {
      for (let i = tracksIds[0]; i < tracksIds?.length; i += 1) {
        initialState[i] = false
      }
    }

    for (let i = 0; i < favoritesIds?.length; i += 1) {
      initialState[favoritesIds[i]] = true
    }

    dispatch(setLikesState(initialState))
  }, [favoritesTracks])

  const elements =
    tracks && tracks.length > 0
      ? tracks.map((item) => (
          <MainPlaylistItem
            item={item}
            key={item.id || Math.random(5)}
            loading={loading}
            toggleLike={toggleLike}
            likesState={likesState}
            setTrackClick={setTrackClick}
            id={item.id}
          />
        ))
      : null

  return (
    <>
      {errorMessage ? "не удалось загрузить плейлист, попробуйте позже" : null}
      {loading ? "loading" : <div className={classes.playlist}>{elements}</div>}
    </>
  )
}
