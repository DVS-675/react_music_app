

import { GenreItem } from "./items/genreItem"
import classes from "./filter.module.css"


export const FilterGenre = ({ tracks }) => {
  const elements = tracks.map((item) => {
    return (
      <div key={item.id}>
        <GenreItem genre={item.genre} />
      </div>
    )
  })

  return (
    <div className={classes.filter}>
      <div className={classes.filter_item}>{elements}</div>
    </div>
  )
}


