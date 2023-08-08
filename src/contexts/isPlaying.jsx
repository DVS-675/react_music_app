import React, { useContext } from 'react';

export const IsPlayingContext = React.createContext({
  isPlaying: null,
  toggleIsPlaying: () => {},
});

export function useIsPlayingContext() {
  const isPlaying = useContext(IsPlayingContext);

  return isPlaying;
}
