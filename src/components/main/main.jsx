import Nav from './nav/nav'
import MainCenter from './main-center/mainCenter'
import MainSidebar from './main-sidebar/mainSidebar'

function Main() {
  return (
    <main className="main">
      <Nav/>
      <MainCenter/>
      <MainSidebar/>
    </main>
  )
}

export default Main
