
// import styles from './dropdown.module.css';
// import { useState } from 'react';
import {
  StyledWrapper,
  StyledList,
  StyledElement,
  StyledFieldset,
  StyledFormButton,
} from "./dropdown"

function Dropdown({
  dropdownList,
  getFilterValue,
  filterValues,
  id,
  handleChange,
  dateFilterName,
}) {
  const isChecked = (value) => dateFilterName === value

  function getSelectedFiltres() {
    const selectedFilters = []
    if (filterValues.length > 0) {
      for (let i = 0; i < dropdownList.length; i += 1) {
        if (filterValues.includes(dropdownList[i])) {
          selectedFilters.push(dropdownList[i])
        }
      }
    }
    return selectedFilters
  }

  function dateFilter() {
    return (
      <StyledFieldset>
        <StyledFormButton checked={isChecked("default")}>
          <label htmlFor="default">
            <input
              type="radio"
              id="default"
              name="default"
              value="default"
              onChange={(e) => {
                handleChange(e)
                getFilterValue(e)
              }}
              checked={isChecked("default")}
            />
            По умолчанию
          </label>
        </StyledFormButton>

        <StyledFormButton checked={isChecked("old")}>
          <label htmlFor="old">
            <input
              type="radio"
              id="old"
              name="old"
              value="old"
              onChange={(e) => {
                handleChange(e)
                getFilterValue(e)
              }}
              checked={isChecked("old")}
            />
            Сначала старые
          </label>
        </StyledFormButton>

        <StyledFormButton checked={isChecked("new")}>
          <label htmlFor="new">
            <input
              type="radio"
              id="new"
              name="new"
              value="new"
              onChange={(e) => {
                handleChange(e)
                getFilterValue(e)
              }}
              checked={isChecked("new")}
            />
            Сначала новые
          </label>
        </StyledFormButton>
      </StyledFieldset>
    )
  }

  const selected = id === "0" || id === "2" ? getSelectedFiltres() : ""

  function setElements(list) {
    const items = []
    for (let i = 0; i < list?.length; i += 1) {
      if (selected.includes(list[i])) {
        items.push(
          <StyledElement
            onClick={(e) => getFilterValue(e)}
            key={list[i]}
            styled
          >
            {list[i]}
          </StyledElement>
        )
      } else {
        items.push(
          <StyledElement onClick={(e) => getFilterValue(e)} key={list[i]}>
            {list[i]}
          </StyledElement>
        )
      }
    }

    return items
  }

  let elements
  if (id === "0" || id === "2") {
    elements = setElements(dropdownList)
  } else {
    elements = dateFilter()
  }

  return (
    <StyledWrapper>
      <StyledList>{elements}</StyledList>
    </StyledWrapper>
  )
}

export default Dropdown
