import React, { useContext } from "react"

export const SwitchPlaylistContext = React.createContext({
  switchPlaylist: false,
  setSwitchPlaylist: () => {},
})

export function useSwitchPlaylistContext() {
  const switchPlaylist = useContext(SwitchPlaylistContext)

  return switchPlaylist
}
