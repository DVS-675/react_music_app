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

  const getNewAllTracks = async () => {
    const allTracks = await getTracks()
    console.log(allTracks)
  }

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

  const toggleLike = async (event) => {
    const { id } = event.currentTarget
    console.log(id)
    const value = likesState[id]
    const newLikesState = { ...likesState }
    console.log(token)
    const newFavorites = async () => {
      await addTrackInFavorites(token?.access, id)
      const newFavoritesTracks = createFavorites(await getNewAllTracks(), user)
      console.log("new", newFavoritesTracks)
      if (newFavoritesTracks) {
        dispatch(setFavoritesTracks(newFavoritesTracks))
      }
    }

    if (value) {
      newLikesState[id] = false
      await deleteTrackInFavorites(token?.access, id)
      await newFavorites()
    } else {
      newLikesState[id] = true
      await newFavorites()
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
