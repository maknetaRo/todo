import React from 'react';
import TodoItem from './TodoItem';
import { StyledList } from '../FilterBar/styles';
import { useTodoContext } from '../../contexts/TodoContextProvider';

const TodoList = () => {
  const { todos, FILTER_MAP, filterName } = useTodoContext();
  console.log(FILTER_MAP);
  console.log(FILTER_MAP[filterName]);
  return (
    <main>
      <StyledList>
        {todos &&
          todos
            .filter(FILTER_MAP[filterName])
            .map((todo, index) => (
              <TodoItem key={index} todo={todo} index={index} />
            ))}
      </StyledList>
    </main>
  );
};

export default TodoList;
