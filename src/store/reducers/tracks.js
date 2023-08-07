/* eslint-disable default-param-last */
import {
  SET_TRACKS,
  //   SET_CURRENT_TRACK_ID,
  SET_PLAY_TRACK,
  //   SET_SHUFFLED_TRACKS_IDS,
  TRACKS_IDS,
} from "../actions/types/tracks"

const initialTracks = {
  allTracks: {},
  tracksIds: [],
  playTrack: {},
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

    default:
      return state.allTracks
  }
}

export default tracksReducer
