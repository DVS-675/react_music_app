/* eslint-disable no-return-assign */
import {
  SET_TRACKS,
  //   SET_CURRENT_TRACK_ID,
  SET_PLAY_TRACK,
  //   SET_SHUFFLED_TRACKS_IDS,
  TRACKS_IDS,
} from '../types/tracks';

export const setAllTracks = (tracks) => ({
  type: SET_TRACKS,
  payload: { tracks },
});

// export const setCurrentTrackID = (id) => ({
//   type: SET_CURRENT_TRACK_ID,
//   payload: { id },
// });

export const setPlayTrack = (playTrack) => ({
  type: SET_PLAY_TRACK,
  payload: { playTrack },
});

// export const setShuffledTracks = (shuffledTracksIds) => ({
//   type: SET_SHUFFLED_TRACKS_IDS,
//   payload: { shuffledTracksIds },
// });

export const setTracksIds = (tracksIds) => ({
  type: TRACKS_IDS,
  payload: { tracksIds },
});
