import React, { useState } from 'react';

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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="todo"
        value={todo.todo}
        onChange={handleChange}
      />
    </form>
  );
};

export default AddItemForm;
