import { Bar } from "../../components/bar/bar"
import { Main } from "../../components/main/main"
import classes from "./content.module.css"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { setPlayTrack } from "../../store/actions/creators/tracks"
import {
  setTracksIds,
  fetchTracksPlaylist,
} from "../../store/actions/creators/tracks"
import { useGetAllTracksQuery } from "../../services/tracks"
import { useSwitchPlaylistContext } from "../../contexts/switchPlaylist"

export const Container = ({
  currentTrack,
  getTracksError,
  tracks,
  loading,
}) => {
  const allTracks = useGetAllTracksQuery().data
  const { switchPlaylist, setSwitchPlaylist } = useSwitchPlaylistContext()
  const dispatch = useDispatch()
  useEffect(() => {
    if (allTracks) {
      if (switchPlaylist) {
        dispatch(fetchTracksPlaylist(allTracks))
        dispatch(setTracksIds(allTracks.map((trackData) => trackData.id)))
        setSwitchPlaylist(false)
      }
    }
  }, [switchPlaylist])

  useEffect(() => {
    if (allTracks.length > 0 && currentTrack) {
      for (let i = 0; i < allTracks?.length; i += 1) {
        if (allTracks[i].id === currentTrack.id) {
          dispatch(setPlayTrack(allTracks[i]))
        }
      }
    }
  }, [allTracks, currentTrack])

  return (
    <div className={classes.container}>
      <Main getTracksError={getTracksError} tracks={tracks} loading={loading} />
      <Bar loading={loading} />
      <footer />
    </div>
  )
}
