import Nav from './nav/nav'
import MainCenter from './main-center/mainCenter'
import MainSidebar from './main-sidebar/mainSidebar'

function Main({loading}) {
  return (
    <main className="main">
      <Nav />
      <MainCenter loading={loading}/>
      <MainSidebar/>
    </main>
  )
}

export default Main
