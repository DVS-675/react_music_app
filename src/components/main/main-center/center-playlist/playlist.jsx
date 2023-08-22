import { MainPlaylistItem } from "./playlistItem"
import classes from "./playlist.module.css"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { useTracksContext } from "../../../../contexts/tracks"
import {
  setLikesState,
  setCurrentPlaylist,
} from "../../../../store/actions/creators/tracks"
import { useTokenContext } from "../../../../contexts/token"

import { createFavorites } from "../../../../utils/playerHelpers"
import {
  useGetAllTracksQuery,
  useLikeTrackMutation,
  useDislikeTrackMutation,
} from "../../../../services/tracks"
import { useSwitchPlaylistContext } from "../../../../contexts/switchPlaylist"

export const MainPlaylist = ({ errorMessage, loading }) => {
  const dispatch = useDispatch()
  const { token } = useTokenContext()
  const [trackClick, setTrackClick] = useState(false)
  const favoritesTracks = useSelector((store) => store.tracks.favoritesTracks)
  console.log(token)
  const favoritesIds = favoritesTracks?.map((favoriteTrack) => favoriteTrack.id)
  const tracksIds = useSelector((store) => store.tracks.tracksIds)
  const likesState = useSelector((store) => store.tracks.likesState)
  const initialState = {}
  const allTracks = useGetAllTracksQuery().data
  const user = localStorage.getItem("user")
  const { setSwitchPlaylist } = useSwitchPlaylistContext()

  const [likeTrigger] = useLikeTrackMutation()
  const [dislikeTrigger] = useDislikeTrackMutation()

  useEffect(() => {
    if (trackClick) {
      setSwitchPlaylist(true)
      setTrackClick(false)
    } else {
      setTrackClick(false)
    }
    dispatch(setCurrentPlaylist(allTracks))
  }, [trackClick])

  const tracks = useTracksContext()
  

  const toggleLike = async (event) => {
    const { id } = event.currentTarget
    const trackState = likesState[id];
    const newLikesState = { ...likesState }
    const { access } = token
    const args = { id, token: access };

    if (trackState) {
      newLikesState[id] = false

      await dislikeTrigger(args);
    } else {
      newLikesState[id] = true

      await likeTrigger(args);
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
