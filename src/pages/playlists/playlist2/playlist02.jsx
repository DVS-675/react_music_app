import Bar from "../../../components/bar/bar"
import { Main } from "../main/main"


import classes from "../playlist1/playlist01.module.css"

export const Playlist2 = () => {
    const title = "100 танцевальных хитов"
  return (
    <div className={classes.container}>
      <Main title={title}/> 
      <Bar />
      <footer />
    </div>
  )
}
  
