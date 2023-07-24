import { CenterHeader } from "../../../components/main/main-center/center-header/centerHeader"
import { Nav } from "../../../components/main/nav/nav"
import { ReactComponent as Search } from "../../../img/icon/search.svg"
import classes from "./mainContent.module.css"
import { useEffect, useState } from "react"

import { MainPlaylist } from "../../../components/main/main-center/center-playlist/playlist"

export const MainContent = ({ error, loading, title, tracks }) => {
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
          <CenterHeader />
        </div>
        <MainPlaylist loading={loading} tracks={tracks} error={error} />
      </div>
      <div className={classes.sidebar}>
        <div className={classes.personal}>
          <p className={classes.name}>Sergey.Ivanov</p>
          <div className={classes.avatar} />
        </div>
      </div>
    </main>
  )
}
