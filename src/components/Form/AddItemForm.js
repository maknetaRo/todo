import React, { useState } from 'react';
import { StyledForm, StyledInput } from './styles';
import { Circle } from '../Button';
import { useTodoContext } from '../../contexts/TodoContextProvider';

const AddItemForm = () => {
  const { addTodo } = useTodoContext();
  const initialState = { id: null, todo: '', completed: false };
  const [todo, setTodo] = useState(initialState);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setTodo({ ...todo, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!todo.todo) return;
    addTodo(todo);
    setTodo(initialState);
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Circle />
      <StyledInput
        type="text"
        name="todo"
        value={todo.todo}
        onChange={handleChange}
        placeholder="Create a new todo..."
      />
    </StyledForm>
  );
};

export default AddItemForm;
