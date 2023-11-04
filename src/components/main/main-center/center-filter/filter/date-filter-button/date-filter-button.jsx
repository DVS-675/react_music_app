import { useState } from "react"
import { StyledButton, StyledButtonActive } from "./date-filter-button"

import Dropdown from "../../../dropdown/dropdown.jsx"
import FilterCounter from "../../filter-counter/filter-counter.jsx"

function DateFilterButton({
  toggleButton,
  text,
  id,
  buttonsState,
  getFilterValue,
}) {
  const [dateFilterName, setDateFilterName] = useState("default")

  //   console.log(dateFilterName);

  const handleChange = (event) => {
    setDateFilterName(event.target.value)
  }

  let visible
  if (buttonsState) {
    visible = buttonsState[id]
  }

  return (
    <div>
      {!visible ? (
        <StyledButton
          id={id}
          onClick={(e) => toggleButton(e)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => toggleButton(e)}
        >
          {text}
          {dateFilterName !== "default" ? <FilterCounter count={1} /> : ""}
        </StyledButton>
      ) : (
        <StyledButtonActive
          id={id}
          onClick={(e) => toggleButton(e)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => toggleButton(e)}
        >
          {text}
          {dateFilterName !== "default" ? <FilterCounter count={1} /> : ""}
        </StyledButtonActive>
      )}

      {visible ? (
        <Dropdown
          id={id}
          getFilterValue={getFilterValue}
          dateFilterName={dateFilterName}
          handleChange={handleChange}
        />
      ) : null}
    </div>
  )
}

export default DateFilterButton
