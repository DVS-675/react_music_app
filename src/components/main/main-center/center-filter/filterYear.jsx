/* eslint-disable react/jsx-key */
/* eslint-disable arrow-body-style */

import YearItem from "./items/yearItem"
import classes from "./filter.module.css"

function FilterYear({ data }) {
  const elements = data.map((item) => {
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

export default FilterYear