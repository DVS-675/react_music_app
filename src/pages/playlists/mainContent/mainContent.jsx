import { CenterHeader } from "../../../components/main/main-center/center-header/centerHeader"
import { Nav } from "../../../components/main/nav/nav"
import { ReactComponent as Search } from "../../../img/icon/search.svg"
import classes from "./mainContent.module.css"

import { MainPlaylist } from "../../../components/main/main-center/center-playlist/playlist"
import { MainSidebar } from "../../../components/main/main-sidebar/mainSidebar"

export const MainContent = ({ loading, errorMessage, title }) => {
  return (
    <main className={classes.main}>
      <Nav />
      <div className={classes.centerblock}>
        <div className={classes.search}>
          <Search className={classes.search_svg} />
          <input
            className={classes.search_text}
            type="search"
            placeholder="Поиск"
            name="search"
          />
        </div>
        <h2 className={classes.title}>{title}</h2>

        <div className={classes.center_content}>
          <CenterHeader loading={loading} />
          <MainPlaylist errorMessage={errorMessage} loading={loading} />
        </div>
      </div>
      <MainSidebar />
    </main>
  )
}
