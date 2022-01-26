import React from 'react';
import { StyledFilterBtn } from './Layout/atoms/Buttons';

const FilterButton = ({ name, isPressed, setFilter }) => {
  return (
    <StyledFilterBtn
      type="button"
      aria-pressed={isPressed}
      onClick={() => setFilter(name)}
    >
      {name}
    </StyledFilterBtn>
  );
};

export default FilterButton;
