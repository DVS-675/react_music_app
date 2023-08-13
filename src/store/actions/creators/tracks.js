/* eslint-disable no-return-assign */
import {
  SET_TRACKS,
  SET_PLAY_TRACK,
  TRACKS_IDS,
  FETCH_TRACKS_FAVORITE,
  FETCH_TRACKS_LIKES,
  FETCH_TRACKS_PLAYLIST,
} from "../types/tracks"

export const setAllTracks = (tracks) => ({
  type: SET_TRACKS,
  payload: { tracks },
})

export const setPlayTrack = (playTrack) => ({
  type: SET_PLAY_TRACK,
  payload: { playTrack },
})

export const setTracksIds = (tracksIds) => ({
  type: TRACKS_IDS,
  payload: { tracksIds },
})

export const fetchTracksFavorite = (tracksFavorite) => ({
  type: FETCH_TRACKS_FAVORITE,
  payload: { tracksFavorite },
})

export const fetchTracksLikes = (tracksLikes) => ({
  type: FETCH_TRACKS_LIKES,
  payload: { tracksLikes },
})

export const fetchTracksPlaylist = (tracksPlaylist) => ({
  type: FETCH_TRACKS_PLAYLIST,
  payload: { tracksPlaylist },
})
