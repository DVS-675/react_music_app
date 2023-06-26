import { ReactComponent as Search } from "../../../img/icon/search.svg"
import MainCenterPlaylist from "./center-playlist/mainCenterPlaylist"
import { ReactComponent as Watch } from "../../../img/icon/watch.svg"

function MainCenter() {
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
        <div className="filter__title">Искать по:</div>
        <div className="filter__button button-author _btn-text">
          исполнителю
        </div>
        <div className="filter__button button-year _btn-text">году выпуска</div>
        <div className="filter__button button-genre _btn-text">жанру</div>
      </div>
      <div className="centerblock__content">
        <div className="content__title playlist-title">
          <div className="playlist-title__col col01">Трек</div>
          <div className="playlist-title__col col02">ИСПОЛНИТЕЛЬ</div>
          <div className="playlist-title__col col03">АЛЬБОМ</div>
          <div className="playlist-title__col col04">
            <Watch className="playlist-title__svg" alt="time" />
          </div>
        </div>
        <MainCenterPlaylist />
      </div>
    </div>
  )
}

export default MainCenter
