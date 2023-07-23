import { Nav } from './nav/nav'
import { MainCenter } from './main-center/mainCenter'
import { MainSidebar } from './main-sidebar/mainSidebar'
import classes from './main.module.css'

export const Main = ({error, tracks, loading, setCurrentTrack}) => {
  return (
    <main className={classes.main}>
      <Nav />
      <MainCenter setCurrentTrack={setCurrentTrack} error={error} tracks={tracks} loading={loading}/>
      <MainSidebar/>
    </main>
  )
}


