import React, { useState, useEffect } from 'react';
import { Circle } from '../Button';
import { StyledForm, StyledInput } from './styles';

const EditItemForm = ({ currentTodo, setIsEditing, updateTodo }) => {
  const [todo, setTodo] = useState(currentTodo);

  useEffect(() => {
    setTodo(currentTodo);
  }, [currentTodo]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setTodo({ ...todo, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateTodo(todo.id, todo);
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Circle />
      <StyledInput
        type="text"
        name="todo"
        value={todo.todo}
        onChange={handleChange}
      />
      <button>Update</button>
      <button onClick={() => setIsEditing(false)}>Cancel</button>
    </StyledForm>
  );
};

export default EditItemForm;
