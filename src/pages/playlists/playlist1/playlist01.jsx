import Bar from "../../../components/bar/bar"
import { Main } from "../main/main"


import classes from "./playlist01.module.css"

export const Playlist1 = () => {
    const title = "Плейлист дня"
  return (
    <div className={classes.container}>
      <Main title={title}/> 
      <Bar />
      <footer />
    </div>
  )
}
