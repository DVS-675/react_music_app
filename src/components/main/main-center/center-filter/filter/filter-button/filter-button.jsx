import Dropdown from '../../../dropdown/dropdown.jsx';
import { StyledButton, StyledButtonActive } from './filter-button';

import FilterCounter from '../../filter-counter/filter-counter.jsx';

function FilterButton({
  toggleButton,
  dropdownList,
  text,
  id,
  buttonsState,
  getFilterValue,
  filterValues,
}) {
 
  let visible;
  if (buttonsState) {
    visible = buttonsState[id];
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
          {filterValues.length > 0 ? (
            <FilterCounter count={filterValues.length} />
          ) : (
            ''
          )}
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
          {filterValues.length > 0 ? (
            <FilterCounter count={filterValues.length} />
          ) : (
            ''
          )}
        </StyledButtonActive>
      )}

      {visible ? (
        <Dropdown
          id={id}
          getFilterValue={getFilterValue}
          dropdownList={dropdownList}
          filterValues={filterValues}
        />
      ) : null}
    </div>
  );
}

export default FilterButton;
