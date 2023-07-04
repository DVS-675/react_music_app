import { useState } from "react"
import { ReactComponent as Search } from "../../../img/icon/search.svg"
import MainCenterPlaylist from "./center-playlist/mainCenterPlaylist"
import { ReactComponent as Watch } from "../../../img/icon/watch.svg"
import CenterFilterAuthor from "./center-filter/centerFilterAuthor"
import CenterFilterYear from "./center-filter/centerFilterYear"
import CenterFilterGenre from "./center-filter/centerFilterGenre"
import Skeleton from "../../skeleton/skeleton"
import data from "../../../utils/state"

function MainCenter({ loading }) {
  const [visibleFilter, setVisibleFilter] = useState(null)

  const toggleVisibleFilter = (filter) => {
    setVisibleFilter(visibleFilter === filter ? null : filter)
  }

  return (
    <div className="main__centerblock centerblock">
      <div className="centerblock__search search">
        <Search className="search__svg" />
        <input
          className="search__text"
          type="search"
          placeholder="Поиск"
          name="search"
        />
      </div>
      <h2 className="centerblock__h2">Треки</h2>
      <div className="centerblock__filter filter">
        <p className="filter__title">Искать по:</p>
        <div className="centerblock__filter_item">
          <button
            onClick={() => {
              toggleVisibleFilter("author")
            }}
            value="author"
            type="button"
            className={
              visibleFilter === "author"
                ? "filter__button button-genre _btn-text button__active"
                : "filter__button button-genre _btn-text"
            }
          >
            исполнителю
          </button>
          {visibleFilter === "author" && <CenterFilterAuthor data={data}/>}
        </div>
        <div className="centerblock__filter_item">
          <button
            onClick={() => toggleVisibleFilter("year")}
            type="button"
            value="year"
            className={
              visibleFilter === "year"
                ? "filter__button button-genre _btn-text button__active"
                : "filter__button button-genre _btn-text"
            }
          >
            году выпуска
          </button>
          {visibleFilter === "year" && <CenterFilterYear data={data}/>}
        </div>
        <div className="centerblock__filter_item">
          <button
            onClick={() => toggleVisibleFilter("genre")}
            type="button"
            value="genre"
            className={
              visibleFilter === "genre"
                ? "filter__button button-genre _btn-text button__active"
                : "filter__button button-genre _btn-text"
            }
          >
            жанру
          </button>
          {visibleFilter === "genre" && <CenterFilterGenre data={data}/>}
        </div>
      </div>
      <div className="centerblock__content">
        {loading ? (
          <div className="content__title playlist-title">
            <div className="playlist-title__col col01">
              <Skeleton width="100px" height="20px" />
            </div>
            <div className="playlist-title__col col02">
              <Skeleton width="100px" height="20px" />
            </div>
            <div className="playlist-title__col col03">
              <Skeleton width="100px" height="20px" />
            </div>
            <div className="playlist-title__col col04">
              <Watch className="playlist-title__svg" alt="time" />
            </div>
          </div>
        ) : (
          <div className="content__title playlist-title">
            <div className="playlist-title__col col01">Трек</div>
            <div className="playlist-title__col col02">ИСПОЛНИТЕЛЬ</div>
            <div className="playlist-title__col col03">АЛЬБОМ</div>
            <div className="playlist-title__col col04">
              <Watch className="playlist-title__svg" alt="time" />
            </div>
          </div>
        )}
        <MainCenterPlaylist data={data} loading={loading} />
      </div>
    </div>
  )
}

export default MainCenter
