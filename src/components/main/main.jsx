import { Nav } from "./nav/nav"
import { MainCenter } from "./main-center/mainCenter"
import { MainSidebar } from "./main-sidebar/mainSidebar"
import classes from "./main.module.css"

export const Main = ({ errorMessage, loading }) => {
  return (
    <main className={classes.main}>
      <Nav />
      <MainCenter errorMessage={errorMessage} loading={loading} />
      <MainSidebar />
    </main>
  )
}
