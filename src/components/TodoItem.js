import React from 'react';
import { GroupElem, SecondElem, StyledListElem } from './Layout/atoms/ListElem';
import { FiEdit2 } from 'react-icons/fi';
import { Button, Circle } from './Layout/atoms/Buttons';

const TodoItem = ({ index, todo, removeTodo, completeTodo, editTodo }) => {
  return (
    <StyledListElem>
      <GroupElem>
        <Circle />
        <SecondElem
          style={{ textDecoration: todo.completed ? 'line-through' : '' }}
          onClick={() => completeTodo(index)}
        >
          {todo.todo}
        </SecondElem>
      </GroupElem>

      <GroupElem>
        <Button onClick={() => editTodo(todo)}>
          <FiEdit2 size={20} />
        </Button>
        <Button onClick={() => removeTodo(todo.id)}>x</Button>
      </GroupElem>
    </StyledListElem>
  );
};

export default TodoItem;
