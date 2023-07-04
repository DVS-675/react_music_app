/* eslint-disable react/jsx-key */
/* eslint-disable arrow-body-style */

import GenreItem from "./items/genreItem"
import classes from "./filter.module.css"


function FilterGenre({ data }) {
  const elements = data.map((item) => {
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

export default FilterGenre
