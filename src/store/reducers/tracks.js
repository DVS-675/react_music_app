/* eslint-disable default-param-last */
import {
  SET_PLAY_TRACK,
  TRACKS_IDS,
  FAVORITES_TRACKS,
  SET_LIKES_STATE,
  CURRENT_PLAYLIST,
} from '../actions/types/tracks';

const initialTracks = {
  favoritesTracks: [],
  tracksIds: [],
  playTrack: {},
  likesState: {},
  currentPlaylist: [],
};

function tracksReducer(state = initialTracks, action) {
  switch (action.type) {
    case TRACKS_IDS: {
      const { tracksIds } = action.payload;

      return {
        ...state,
        tracksIds,
      };
    }
    case SET_PLAY_TRACK: {
      const { playTrack } = action.payload;

      return {
        ...state,
        playTrack,
      };
    }
    case FAVORITES_TRACKS: {
      const { favoritesTracks } = action.payload;

      return {
        ...state,
        favoritesTracks,
      };
    }
    case SET_LIKES_STATE: {
      const { likesState } = action.payload;

      return {
        ...state,
        likesState,
      };
    }
    case CURRENT_PLAYLIST: {
      const { currentPlaylist } = action.payload;

      return {
        ...state,
        currentPlaylist,
      };
    }

    default:
      return state;
  }
}

export default tracksReducer;
