import React from 'react';
import { StyledFilterBar } from './styles';
import { StyledFilterBtn } from '../Button';

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
