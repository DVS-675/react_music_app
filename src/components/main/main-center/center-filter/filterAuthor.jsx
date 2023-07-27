
import { AuthorItem } from "./items/authorItem"
import classes from "./filter.module.css"

export const FilterAuthor = ({ tracks }) => {
  const elements = tracks.map((item) => {
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


