import React from 'react';
import FilterBar from '../FilterBar/FilterBar';
import TodoItem from './TodoItem';
import { StyledList } from '../FilterBar/styles';

const TodoList = ({
  todos,
  removeTodo,
  completeTodo,
  editTodo,
  pending,
  clearCompleted,
  filterList,
  mapNames,
  filter,
}) => {
  console.log(filter);
  console.log(mapNames);
  return (
    <>
      <StyledList>
        {todos.filter(mapNames[filter]).map((todo, index) => (
          <TodoItem
            todo={todo}
            index={index}
            key={index}
            removeTodo={removeTodo}
            completeTodo={completeTodo}
            editTodo={editTodo}
          />
        ))}
      </StyledList>

      <FilterBar
        pending={pending}
        clearCompleted={clearCompleted}
        filterList={filterList}
      />
    </>
  );
};

export default TodoList;
