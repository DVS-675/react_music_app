import { useState, useEffect } from "react"
import { ReactComponent as Search } from "../../../img/icon/search.svg"
import { MainPlaylist } from "./center-playlist/playlist"

import classes from "./mainCenter.module.css"
import { CenterHeader } from "./center-header/centerHeader"

import { useTracksContext } from "../../../contexts/tracks"
import { createFilterList } from "../../../utils/filter"
import { FilterMain } from "./center-filter/filterMain"

export const MainCenter = ({ errorMessage, loading }) => {
  const [visibleFilter, setVisibleFilter] = useState(null)
  const tracks = useTracksContext()

  const [buttonId, setButtonId] = useState()
  const [filterValues, setFilterValues] = useState({
    genre: [],
    name: [],
    date: [],
  })

  const toggleVisibleFilter = (filter) => {
    setVisibleFilter(visibleFilter === filter ? null : filter)
  }

  const [searchValue, setSearchValue] = useState()

  function detectedFilter(value, values, arr, id) {
    if (id === 0) {
      for (let i = 0; i < arr?.length; i += 1) {
        if (!values.name.includes(value)) {
          values.name.push(value)
        } else {
          const index = values.name.indexOf(value)
          values.name.splice(index, 1)
        }
      }
    } else if (id === 1) {
      values.date.splice(0, values.date.length)
      values.date.push(value)
    } else if (id === 2) {
      for (let i = 0; i < arr?.length; i += 1) {
        if (!values.genre.includes(value)) {
          values.genre.push(value)
        } else {
          const index = values.genre.indexOf(value)
          values.genre.splice(index, 1)
        }
      }
    }
  }

  const getSearchValue = (e) => {
    setSearchValue(e.target.value)
  }

  // Добавление фильтров
  const getFilterValue = (e) => {
    const values = { ...filterValues }

    let filterList
    if (buttonId === 0 || buttonId === 2) {
      filterList = createFilterList(tracks, buttonId)
    } else {
      filterList = [e.target.name]
    }

    if (tracks) {
      if (buttonId === 0 || buttonId === 2) {
        detectedFilter(e.target.textContent, values, filterList, buttonId)
      } else {
        detectedFilter(e.target.name, values, filterList, buttonId)
      }

      setFilterValues(values)
    }
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
          onInput={(event) => getSearchValue(event)}
        />
      </div>
      <h2 className={classes.title}>Треки</h2>
      <FilterMain
        toggleVisibleFilter={toggleVisibleFilter}
        visibleFilter={visibleFilter}
        tracks={tracks}
      />
      <div className={classes.center_content}>
        <CenterHeader loading={loading} />
        <MainPlaylist
          searchValue={searchValue}
          filterValues={filterValues}
          errorMessage={errorMessage}
          loading={loading}
        />
      </div>
    </div>
  )
}
