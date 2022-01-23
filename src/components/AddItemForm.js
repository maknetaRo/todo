import React, { useState } from 'react';
import { StyledForm, StyledInput } from '../components/Layout/atoms/Form';
import { Circle } from './Layout/atoms/CircleButton';

const AddItemForm = ({ addTodo }) => {
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
