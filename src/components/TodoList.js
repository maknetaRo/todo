import React from 'react';
import FilterBar from './FilterBar';
import TodoItem from './TodoItem';

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
    <div>
      <ol>
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
      </ol>
      <FilterBar
        pending={pending}
        clearCompleted={clearCompleted}
        filterList={filterList}
      />
    </div>
  );
};

export default TodoList;
