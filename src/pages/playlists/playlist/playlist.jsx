import { Bar } from "../../../components/bar/bar"
import { MainContent } from "../mainContent/mainContent"
import classes from "./playlist.module.css"

export const Playlist = ({ loading, errorMessage }) => {
  return (
    <div className={classes.container}>
      <MainContent />

      <Bar />
      <footer />
    </div>
  )
}
