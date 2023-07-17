import { Bar } from "../../../components/bar/bar"
import { MainContent } from "../mainContent/mainContent"
import { useParams } from "react-router-dom"
import dataPlaylist from "../../../utils/state_playlists"
import classes from "./playlist.module.css"

export const Playlist = () => {    
    const params = useParams();
    const playlist = dataPlaylist.find((playlist) => playlist.id === Number(params.id))
  return (
    <div className={classes.container}>
      <MainContent title={playlist.title} data={playlist.items}/> 
      <Bar />
      <footer />
    </div>
  )
}
