/* eslint-disable no-return-assign */
import {
  SET_PLAY_TRACK,
  TRACKS_IDS,
  FAVORITES_TRACKS,
  SET_LIKES_STATE,
  CURRENT_PLAYLIST,
} from '../types/tracks';

export const setPlayTrack = (playTrack) => ({
  type: SET_PLAY_TRACK,
  payload: { playTrack },
});

export const setTracksIds = (tracksIds) => ({
  type: TRACKS_IDS,
  payload: { tracksIds },
});

export const setFavoritesTracks = (favoritesTracks) => ({
  type: FAVORITES_TRACKS,
  payload: { favoritesTracks },
});

export const setLikesState = (likesState) => ({
  type: SET_LIKES_STATE,
  payload: { likesState },
});

export const setCurrentPlaylist = (currentPlaylist) => ({
  type: CURRENT_PLAYLIST,
  payload: { currentPlaylist },
});
