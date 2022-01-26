import React from 'react';
import { StyledFilterBar } from './Layout/atoms/StyledFilterBar';
import { StyledFilterBtn } from './Layout/atoms/Buttons';

const FilterBar = ({ pending, clearCompleted, filterList }) => {
  return (
    <StyledFilterBar>
      <p>
        {pending}
        {pending === 1 ? ' Item Left' : ' Items Left'}
      </p>
      {/*{filterList}*/}
      <StyledFilterBtn onClick={clearCompleted}>
        Clear completed
      </StyledFilterBtn>
    </StyledFilterBar>
  );
};

export default FilterBar;
