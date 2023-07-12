import Bar from "../../../components/bar/bar"
import { Main } from "../main/main"

import classes from "../playlist1/playlist01.module.css"

export const Playlist3 = () => {
    const title = "Инди заряд"
  return (
    <div className={classes.container}>
      <Main title={title}/>
      <Bar />
      <footer />
    </div>
  )
}
