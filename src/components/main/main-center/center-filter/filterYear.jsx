

import { YearItem } from "./items/yearItem"
import classes from "./filter.module.css"

export const FilterYear = ({ tracks }) => {
  const elements = tracks.map((item) => {
    return (
      <div key={item.id}>
        <YearItem year={item.release_date} />
      </div>
    )
  })

  return (
    <div className={classes.filter}>
      <div className={classes.filter_item}>{elements}</div>
    </div>
  )
}


