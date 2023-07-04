/* eslint-disable react/jsx-key */
/* eslint-disable arrow-body-style */
import AuthorItem from "./items/authorItem"
import classes from "./filter.module.css"

function FilterAuthor({ data }) {
  const elements = data.map((item) => {
    return (
      <div key={item.id}>
        <AuthorItem author={item.author} />
      </div>
    )
  })

  return (
    <div className={classes.filter}>
      <div className={classes.filter_item}>{elements}</div>
    </div>
  )
}

export default FilterAuthor
