import { useState } from "react"
import { ReactComponent as Search } from "../../../img/icon/search.svg"
import { MainPlaylist } from "./center-playlist/playlist"
import { FilterAuthor } from "./center-filter/filterAuthor"
import { FilterYear } from "./center-filter/filterYear"
import { FilterGenre } from "./center-filter/filterGenre"
import classes from "./mainCenter.module.css"
import { CenterHeader } from "./center-header/centerHeader"

export const MainCenter = ({ getTracksError, tracks, loading, setCurrentTrack }) => {
  
  const [visibleFilter, setVisibleFilter] = useState(null)

  const toggleVisibleFilter = (filter) => {
    setVisibleFilter(visibleFilter === filter ? null : filter)
  }

  return (
    <div className={classes.centerblock}>
      <div className={classes.search}>
        <Search className={classes.search_svg} />
        <input
          className={classes.search_text}
          type="search"
          placeholder="Поиск"
          name="search"
        />
      </div>
      <h2 className={classes.title}>Треки</h2>
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
      <div className={classes.center_content}>
        <CenterHeader loading={loading} />
        <MainPlaylist getTracksError={getTracksError} loading={loading} />
      </div>
    </div>
  )
}
