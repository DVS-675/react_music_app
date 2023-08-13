import { Bar } from "../../../components/bar/bar"
import { MainContent } from "../mainContent/mainContent"
import classes from "./playlist.module.css"
import { useEffect } from "react"
import { TracksContext } from "../../../contexts/tracks"
import { useSelector, useDispatch } from "react-redux"

import {
  setTracksIds,
  fetchTracksPlaylist,
} from "../../../store/actions/creators/tracks"
import { useSwitchPlaylistContext } from "../../../contexts/switchPlaylist"

export const Playlist = ({
  tracks,
  setTracks,
  currentTrack,
  setCurrentTrack,
  getTracksError,
  setGetTracksError,
  loading,
  setLoading,
}) => {
  const dispatch = useDispatch()
  const favoritesTracks = useSelector((store) => store.tracks.favoritesTracks)
  const { switchPlaylist, setSwitchPlaylist } = useSwitchPlaylistContext()
  useEffect(() => {
    if (favoritesTracks) {
      if (switchPlaylist) {
        dispatch(fetchTracksPlaylist(favoritesTracks))
        dispatch(setTracksIds(favoritesTracks.map((trackData) => trackData.id)))
        setSwitchPlaylist(false)
      }
    }
  }, [favoritesTracks, switchPlaylist])

  return (
    <div className={classes.container}>
      <TracksContext.Provider value={favoritesTracks}>
        <MainContent
          getTracksError={getTracksError}
          loading={loading}
          tracks={tracks}
          setCurrentTrack={setCurrentTrack}
        />
      </TracksContext.Provider>
      <Bar currentTrack={currentTrack} loading={loading} />
      <footer />
    </div>
  )
}
