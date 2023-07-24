import { Bar } from "../../components/bar/bar"
import { Main } from "../../components/main/main"
import classes from "./content.module.css"

export const Container = ({
  setCurrentTrack,
  currentTrack,
  error,
  tracks,
  loading
}) => {
  console.log(tracks)
  console.log(loading)

  return (
    <div className={classes.container}>
      <Main error={error} tracks={tracks} loading={loading} />
      <Bar
        currentTrack={currentTrack}
        setCurrentTrack={setCurrentTrack}
        loading={loading}
      />
      <footer />
    </div>
  )
}
