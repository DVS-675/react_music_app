import { useState } from 'react';
import { createFilterList } from '../../../../../utils/filter';
import FilterButton from './filter-button/filter-button.jsx';
import { useTracksContext } from '../../../../../contexts/tracks';
import { StyledFilter, StyledTitle, StyledButtons } from './filter';

import DateFilterButton from './date-filter-button/date-filter-button.jsx';

let state = {
  0: false,
  1: false,
  2: false,
};


const changeState = (filterState, id) => {
  const newState = {};
  for (let i = 0; i < Object.keys(filterState).length; i += 1) {
    if (i === id) {
      newState[id] = !filterState[id];
    } else {
      newState[i] = false;
    }
  }

  state = newState;

  return newState;
};

export function Filter({ getFilterValue, filterValues, setButtonId }) {  
  const filterElements = useTracksContext();

  const [dropdownList, setDropdownList] = useState();
  const [buttonsState, setButtonsState] = useState();

  const toggleButton = (e) => {
    const { target } = e;
    const id = Number(target.id);
    setButtonId(id);
    if (id === 0 || id === 2) {
      setDropdownList(createFilterList(filterElements, id));
    } else {
      setDropdownList(
        createFilterList(
          ['сначала старые', 'сначала новые', 'по умолчанию'],
          id
        )
      );
    }

    setButtonsState(changeState(state, id));
  };

  return (
    <StyledFilter>
      <StyledTitle>Искать по:</StyledTitle>
      <StyledButtons>
        <FilterButton
          toggleButton={toggleButton}
          dropdownList={dropdownList}
          id="0"
          text="исполнителю"
          buttonsState={buttonsState}
          getFilterValue={getFilterValue}
          filterValues={filterValues.name}
        />
        <DateFilterButton
          toggleButton={toggleButton}
          dropdownList={dropdownList}
          id="1"
          text="году выпуска"
          buttonsState={buttonsState}
          getFilterValue={getFilterValue}
          filterValues={filterValues.genre}
        />
        <FilterButton
          toggleButton={toggleButton}
          dropdownList={dropdownList}
          id="2"
          text="жанру"
          buttonsState={buttonsState}
          getFilterValue={getFilterValue}
          filterValues={filterValues.genre}
        />
      </StyledButtons>
    </StyledFilter>
  );
}

export default Filter;
