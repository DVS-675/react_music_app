import { Nav } from "./nav/nav"
import { MainCenter } from "./main-center/mainCenter"
import { MainSidebar } from "./main-sidebar/mainSidebar"
import classes from "./main.module.css"

export const Main = ({ getTracksError, tracks, loading }) => {
  return (
    <main className={classes.main}>
      <Nav />
      <MainCenter
        getTracksError={getTracksError}
        tracks={tracks}
        loading={loading}
      />
      <MainSidebar />
    </main>
  )
}
