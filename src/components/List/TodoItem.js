import React from 'react';
import { GroupElem, SecondElem, StyledListElem } from './styles';
import { FiEdit2 } from 'react-icons/fi';
import { Button, Circle } from '../Button';
import { useTodoContext } from '../../contexts/TodoContextProvider';

const TodoItem = ({ index, todo }) => {
  const { removeTodo, completeTodo, editTodo } = useTodoContext();

  return (
    <StyledListElem>
      <GroupElem>
        <button onClick={() => completeTodo(index)}>
          {todo.completed ? 'V' : <Circle />}
        </button>

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
