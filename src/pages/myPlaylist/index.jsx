import Bar from "../../components/bar/bar"
import { Main } from "../playlists/main/main"
import data from "../../utils/utils"

import classes from "./index.module.css"
import MainPlaylist from "../../components/main/main-center/center-playlist/playlist"

export const MyPlaylist = () => {
  const title = "Мои треки"
  return (
    <div className={classes.container}>
      <Main title={title} />
      <MainPlaylist data={data} />
      <Bar />
      <footer />
    </div>
  )
}
