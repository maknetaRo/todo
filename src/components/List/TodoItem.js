import React from 'react';
import { GroupElem, SecondElem, StyledListElem } from './styles';
import { FiEdit2 } from 'react-icons/fi';
import checked from '../../images/icon-check.svg';


import { Button, Circle, CheckedButton } from '../Button';
import { useTodoContext } from '../../contexts/TodoContextProvider';
import { ThemeConsumer } from 'styled-components';

const TodoItem = ({ index, todo }) => {
  const { removeTodo, completeTodo, editTodo } = useTodoContext();

  return (
    <StyledListElem>
      <GroupElem>
        <div onClick={() => completeTodo(index)}>
          {todo.completed ? <CheckedButton icon={checked} />: <Circle />}
        </div>

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
        <Button  onClick={() => removeTodo(todo.id)}>x</Button>
      </GroupElem>
    </StyledListElem>
  );
};

export default TodoItem;

// Todo: https://dev.to/aromanarguello/how-to-use-themes-in-styled-components-49h