import React from 'react';
import { StyledFilterBar } from './styles';
import { StyledFilterBtn } from '../Button';
import { useTodoContext } from '../../contexts/TodoContextProvider';
import FilterButton from './FilterButton';

const FilterBar = () => {
  const { pending, clearCompleted, FILTER_NAMES, filterName, setFilterName } =
    useTodoContext();

  return (
    <StyledFilterBar>
      <p>
        {pending}
        {pending === 1 ? ' Item Left' : ' Items Left'}
      </p>
      {FILTER_NAMES.map((name) => (
        <FilterButton key={name} name={name} />
      ))}
      {/*{filterList}*/}
      <StyledFilterBtn onClick={clearCompleted}>
        Clear completed
      </StyledFilterBtn>
    </StyledFilterBar>
  );
};

export default FilterBar;
