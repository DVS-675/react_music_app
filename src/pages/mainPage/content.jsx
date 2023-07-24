import { Bar } from "../../components/bar/bar"
import { Main } from "../../components/main/main"
import classes from "./content.module.css"

export const Container = ({
  setCurrentTrack,
  currentTrack,
  getTracksError,
  tracks,
  loading
}) => {
  console.log(tracks)
  console.log(loading)

  return (
    <div className={classes.container}>
      <Main setCurrentTrack={setCurrentTrack} getTracksError={getTracksError} tracks={tracks} loading={loading} />
      <Bar 
        currentTrack={currentTrack}        
        loading={loading}
      />
      <footer />
    </div>
  )
}
