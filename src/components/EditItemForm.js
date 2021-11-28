import React, { useState, useEffect } from 'react';

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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="todo"
        value={todo.todo}
        onChange={handleChange}
      />
      <button>Update</button>
      <button onClick={() => setIsEditing(false)}>Cancel</button>
    </form>
  );
};

export default EditItemForm;
