import { FilterAuthor } from "./filterAuthor"
import { FilterGenre } from "./filterGenre"
import { FilterYear } from "./filterYear"
import classes from "./filterMain.module.css"

export const FilterMain = ({ toggleVisibleFilter, visibleFilter, tracks }) => {
  return (
    <div className={classes.filter}>
      <p className={classes.filter_title}>Искать по:</p>
      <div className={classes.filter_item}>
        <button
          onClick={() => {
            toggleVisibleFilter("author")
          }}
          value="author"
          type="button"
          className={
            visibleFilter === "author"
              ? `${classes.filter_button} ${classes.btn_text} ${classes.button_active}`
              : `${classes.filter_button} ${classes.btn_text}`
          }
        >
          исполнителю
        </button>
        {visibleFilter === "author" && <FilterAuthor tracks={tracks} />}
      </div>
      <div className={classes.filter_item}>
        <button
          onClick={() => toggleVisibleFilter("year")}
          type="button"
          value="year"
          className={
            visibleFilter === "year"
              ? `${classes.filter_button} ${classes.btn_text} ${classes.button_active}`
              : `${classes.filter_button} ${classes.btn_text}`
          }
        >
          году выпуска
        </button>
        {visibleFilter === "year" && <FilterYear tracks={tracks} />}
      </div>
      <div className={classes.filter_item}>
        <button
          onClick={() => toggleVisibleFilter("genre")}
          type="button"
          value="genre"
          className={
            visibleFilter === "genre"
              ? `${classes.filter_button} ${classes.btn_text} ${classes.button_active}`
              : `${classes.filter_button} ${classes.btn_text}`
          }
        >
          жанру
        </button>
        {visibleFilter === "genre" && <FilterGenre tracks={tracks} />}
      </div>
    </div>
  )
}
