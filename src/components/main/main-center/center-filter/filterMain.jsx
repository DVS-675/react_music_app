import { FilterAuthor } from "./filterAuthor"
import { FilterGenre } from "./filterGenre"
import { FilterYear } from "./filterYear"
import classes from "./filterMain.module.css"
import { createFilterList } from "../../../../utils/filter"
import { useTracksContext } from "../../../../contexts/tracks"
import { useState } from "react"

let state = {
  0: false,
  1: false,
  2: false,
}

const changeState = (filterState, id) => {
  const newState = {}
  for (let i = 0; i < Object.keys(filterState).length; i += 1) {
    if (i === id) {
      newState[id] = !filterState[id]
    } else {
      newState[i] = false
    }
  }

  state = newState

  return newState
}

export const FilterMain = ({ getFilterValue, filterValues, setButtonId }) => {
  const filterElements = useTracksContext()

  const [dropdownList, setDropdownList] = useState()
  const [buttonsState, setButtonsState] = useState()
  const [visible, setVisible] = useState(false)

  const toggleButton = (e) => {
    const { target } = e
    const id = Number(target.id)
    setButtonId(id)
    if (id === 0 || id === 2) {
      setDropdownList(createFilterList(filterElements, id))
    } else {
      setDropdownList(
        createFilterList(
          ["сначала старые", "сначала новые", "по умолчанию"],
          id
        )
      )
    }

    setButtonsState(changeState(state, id))
  }

  return (
    <div className={classes.filter}>
      <p className={classes.filter_title}>Искать по:</p>
      <div className={classes.filter_item}>
        <button
          value="author"
          type="button"
          className={
            visible === "author"
              ? `${classes.filter_button} ${classes.btn_text} ${classes.button_active}`
              : `${classes.filter_button} ${classes.btn_text}`
          }
        >
          исполнителю
        </button>
        {visible === "author" && (
          <FilterAuthor
            setVisible={setVisible}
            visible={visible}
            toggleButton={toggleButton}
            dropdownList={dropdownList}
            id="0"
            text="исполнителю"
            buttonsState={buttonsState}
            getFilterValue={getFilterValue}
            filterValues={filterValues.name}
          />
        )}
      </div>
      <div className={classes.filter_item}>
        <button
          onClick={() => toggleVisibleFilter("year")}
          type="button"
          value="year"
          className={
            visible === "year"
              ? `${classes.filter_button} ${classes.btn_text} ${classes.button_active}`
              : `${classes.filter_button} ${classes.btn_text}`
          }
        >
          году выпуска
        </button>
        {visible === "year" && (
          <FilterYear
            setVisible={setVisible}
            visible={visible}
            toggleButton={toggleButton}
            dropdownList={dropdownList}
            id="1"
            text="году выпуска"
            buttonsState={buttonsState}
            getFilterValue={getFilterValue}
            filterValues={filterValues.genre}
          />
        )}
      </div>
      <div className={classes.filter_item}>
        <button
          onClick={() => toggleVisibleFilter("genre")}
          type="button"
          value="genre"
          className={
            visible === "genre"
              ? `${classes.filter_button} ${classes.btn_text} ${classes.button_active}`
              : `${classes.filter_button} ${classes.btn_text}`
          }
        >
          жанру
        </button>
        {visible === "genre" && (
          <FilterGenre
            setVisible={setVisible}
            visible={visible}
            toggleButton={toggleButton}
            dropdownList={dropdownList}
            id="1"
            text="году выпуска"
            buttonsState={buttonsState}
            getFilterValue={getFilterValue}
            filterValues={filterValues.genre}
          />
        )}
      </div>
    </div>
  )
}
