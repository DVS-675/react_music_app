/* eslint-disable default-param-last */
import {
  SET_TRACKS,
  SET_PLAY_TRACK,
  TRACKS_IDS,
  FETCH_TRACKS_FAVORITE,
  FETCH_TRACKS_LIKES,
  FETCH_TRACKS_PLAYLIST,
} from "../actions/types/tracks"

const initialTracks = {
  allTracks: {},
  tracksIds: [],
  playTrack: {},
  tracksFavorite: [],
  tracksLikes: {},
  tracksPlaylist: [],
}

function tracksReducer(state = initialTracks, action) {
  switch (action.type) {
    case SET_TRACKS: {
      const { tracks } = action.payload

      if (state.length !== 0) {
        return { allTracks: tracks }
      }
      return {
        ...state,
        allTracks: [...state.allTracks, tracks],
      }
    }
    case TRACKS_IDS: {
      const { tracksIds } = action.payload

      return {
        ...state,
        tracksIds,
      }
    }
    case SET_PLAY_TRACK: {
      const { playTrack } = action.payload

      return {
        ...state,
        playTrack,
      }
    }
    case FETCH_TRACKS_FAVORITE: {
      const { tracksFavorite } = action.payload

      return {
        ...state,
        tracksFavorite,
      }
    }
    case FETCH_TRACKS_LIKES: {
      const { tracksLikes } = action.payload

      return {
        ...state,
        tracksLikes,
      }
    }
    case FETCH_TRACKS_PLAYLIST: {
      const { tracksPlaylist } = action.payload

      return {
        ...state,
        tracksPlaylist,
      }
    }

    default:
      return state.allTracks
  }
}

export default tracksReducer
