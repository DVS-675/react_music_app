import React, { useContext } from 'react';

export const TracksContext = React.createContext(null);

export function useTracksContext() {
  const tracks = useContext(TracksContext);

  if (!tracks) {
    console.log('ошибка');
    return false;
  }

  return tracks;
}
