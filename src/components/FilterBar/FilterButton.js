import React from 'react';
import { useTodoContext } from '../../contexts/TodoContextProvider';
import { StyledFilterBtn } from '../Button';

const FilterButton = ({ name, isPressed }) => {
  const { setFilterName, filterName } = useTodoContext();
  return (
    <StyledFilterBtn
      type="button"
      aria-pressed={name === filterName}
      onClick={() => {
        setFilterName(name);
        console.log(name);
      }}
    >
      {name}
    </StyledFilterBtn>
  );
};

export default FilterButton;
