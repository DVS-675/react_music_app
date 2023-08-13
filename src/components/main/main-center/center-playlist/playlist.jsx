import { MainPlaylistItem } from "./playlistItem"
import classes from "./playlist.module.css"
import { setPlayTrack } from "../../../../store/actions/creators/tracks"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { useIsPlayingContext } from "../../../../contexts/isPlaying"
import { useEffect, useState } from "react"
import { useTracksContext } from "../../../../contexts/tracks"
import {
  fetchTracksLikes,
  fetchTracksFavorite,
} from "../../../../store/actions/creators/tracks"
import { useTokenContext } from "../../../../contexts/token"

import {
  deleteTrackInFavorites,
  addTrackInFavorites,
  getFavoritesTracks,
} from "../../../../api"
import { useSwitchPlaylistContext } from "../../../../contexts/switchPlaylist"

export const MainPlaylist = ({ getTracksError, loading }) => {
  const dispatch = useDispatch()
  const { token } = useTokenContext()
  const [trackClick, setTrackClick] = useState(false)
  const favoritesTracks = useSelector((store) => store.tracks.favoritesTracks)
  const favoritesIds = favoritesTracks.map((favoriteTrack) => favoriteTrack.id)
  const tracksIds = useSelector((store) => store.tracks.tracksIds)
  const likesState = useSelector((store) => store.tracks.likesState)
  const initialState = {}
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

  const playedTrack = useSelector((store) => store.tracks.playTrack)
  const { isPlaying, toggleIsPlaying } = useIsPlayingContext()

  const getNewFavoritesTracks = async () => {
    dispatch(fetchTracksFavorite(await getFavoritesTracks(token.access)))
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

    dispatch(fetchTracksLikes(newLikesState))
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

    dispatch(fetchTracksLikes(initialState))
  }, [favoritesTracks])

  const elements =
    tracks &&
    tracks.map((item) => {
      return (
        <div
          onClick={() => {
            dispatch(setPlayTrack(item))
            toggleIsPlaying(true)
            setTrackClick(true)
          }}
          role="button"
          tabIndex={0}
          key={item.id}
          onKeyDown={() => {
            dispatch(setPlayTrack(item))
            toggleIsPlaying(true)
            setTrackClick(true)
          }}
        >
          <MainPlaylistItem
            item={item}
            playedTrack={playedTrack}
            isPlaying={isPlaying}
            id={item.id}
            name={item.name}
            author={item.author}
            releaseDate={item.release_date}
            genre={item.genre}
            durationInSeconds={item.duration_in_seconds}
            album={item.album}
            logo={item.logo}
            trackFile={item.track_file}
            toggleLike={toggleLike}
            likesState={likesState}
            setTrackClick={setTrackClick}
            loading={loading}
            key={item.id || Math.random(5)}
          />
        </div>
      )
    })

  return (
    <>
      {getTracksError
        ? "не удалось загрузить плейлист, попробуйте позже"
        : null}
      {loading ? "loading" : <div className={classes.playlist}>{elements}</div>}
    </>
  )
}
