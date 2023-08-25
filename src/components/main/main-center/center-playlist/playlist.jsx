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

import {
  getFilterByDate,
  getSearchingTracks,
  getFilteredTracks,
  getCombineFilteredTracks,
} from "../../../../utils/filter"
import { useSwitchPlaylistContext } from "../../../../contexts/switchPlaylist"

export const MainPlaylist = ({
  errorMessage,
  loading,
  searchValue,
  filterValues,
}) => {
  const dispatch = useDispatch()
  const { token } = useTokenContext()
  const [trackClick, setTrackClick] = useState(false)
  const favoritesTracks = useSelector((store) => store.tracks.favoritesTracks)

  const favoritesIds = favoritesTracks?.map((favoriteTrack) => favoriteTrack.id)
  const tracksIds = useSelector((store) => store.tracks.tracksIds)
  const likesState = useSelector((store) => store.tracks.likesState)
  const initialState = {}
  const allTracks = useGetAllTracksQuery().data
  const tracks = useTracksContext()

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

  const toggleLike = async (event) => {
    const { id } = event.currentTarget
    const trackState = likesState[id]
    const newLikesState = { ...likesState }
    const { access } = token
    const args = { id, token: access }

    if (trackState) {
      newLikesState[id] = false
      await dislikeTrigger(args)
    } else {
      newLikesState[id] = true
      await likeTrigger(args)
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

  const filterList = () => {
    let list = tracks
    if (searchValue) {
      list =
        list && list.length > 0 ? getSearchingTracks(list, searchValue) : null
    }
    if (filterValues?.genre.length > 0 || filterValues?.name.length > 0) {
      let filteringTrack

      if (filterValues?.name.length > 0 && filterValues?.genre.length > 0) {
        filteringTrack =
          list && list.length > 0
            ? getCombineFilteredTracks(list, filterValues)
            : null
      } else if (filterValues.name.length > 0) {
        filteringTrack =
          list && list.length > 0
            ? getFilteredTracks(list, filterValues.name)
            : null
      } else if (filterValues?.genre.length > 0) {
        filteringTrack =
          list && list.length > 0
            ? getFilteredTracks(list, filterValues?.genre)
            : null
      }

      list = filteringTrack
    }
    if (filterValues?.date.length > 0) {
      list =
        list && list.length > 0
          ? getFilterByDate(list, filterValues.date)
          : null
    }

    return list
  }

  const filteredList = filterList()

  return (
    <>
      {loading ? (
        "loading"
      ) : (
        <div className={classes.playlist}>
          {errorMessage || tracks?.length > 0 ? (
            filteredList?.length > 0 ? (
              filteredList.map((item) => (
                <MainPlaylistItem
                  item={item}
                  key={Math.random(40) || Math.random(5)}
                  loading={loading}
                  toggleLike={toggleLike}
                  likesState={likesState}
                  setTrackClick={setTrackClick}
                />
              ))
            ) : (
              <h2>Ничего не найдено</h2>
            )
          ) : (
            ""
          )}
        </div>
      )}
    </>
  )
}
