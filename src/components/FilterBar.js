import React from 'react';

const FilterBar = ({ pending, clearCompleted, filterList }) => {
  return (
    <div>
      <p>{pending} Active Todos</p>
      {filterList}
      <button onClick={clearCompleted}>Clear completed</button>
    </div>
  );
};

export default FilterBar;
