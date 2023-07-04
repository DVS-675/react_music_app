import Nav from './nav/nav'
import MainCenter from './main-center/mainCenter'
import MainSidebar from './main-sidebar/mainSidebar'
import classes from './main.module.css'

function Main({loading}) {
  return (
    <main className={classes.main}>
      <Nav />
      <MainCenter loading={loading}/>
      <MainSidebar/>
    </main>
  )
}

export default Main
