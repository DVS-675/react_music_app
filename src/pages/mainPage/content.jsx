import { Bar } from "../../components/bar/bar"
import { Main } from "../../components/main/main"
import classes from "./content.module.css"
import { useEffect } from "react"
import { useDispatch } from "react-redux"

import {
  setTracksIds,
  setCurrentPlaylist,
} from "../../store/actions/creators/tracks"
import { useGetAllTracksQuery } from "../../services/tracks"
import { useSwitchPlaylistContext } from "../../contexts/switchPlaylist"

export const Container = ({ errorMessage, loading }) => {
  const allTracks = useGetAllTracksQuery().data
  console.log(allTracks)
  const { switchPlaylist, setSwitchPlaylist } = useSwitchPlaylistContext()
  const dispatch = useDispatch()
  useEffect(() => {
    if (allTracks) {
      if (switchPlaylist) {
        dispatch(setCurrentPlaylist(allTracks))
        dispatch(setTracksIds(allTracks.map((trackData) => trackData.id)))
        setSwitchPlaylist(false)
      }
    }
  }, [switchPlaylist])

  return (
    <div className={classes.container}>
      <Main errorMessage={errorMessage} loading={loading} />
      <Bar loading={loading} />
      <footer />
    </div>
  )
}
