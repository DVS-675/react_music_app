// import { shuffle } from '../../consts/helpers';

const trackSelector = (store) => store.tracks;

export const tracksAllSelector = (store) =>
  trackSelector(store)?.allTracks || [];

export const playTrackSelector = (store) =>
  trackSelector(store)?.playTrack || {};

export const tracksIdsSelector = (store) =>
  trackSelector(store)?.tracksIds || [];
