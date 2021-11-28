import React from 'react';

const TodoItem = ({ index, todo, removeTodo, completeTodo, editTodo }) => {
  return (
    <li>
      <div
        style={{ textDecoration: todo.completed ? 'line-through' : '' }}
        onClick={() => completeTodo(index)}
      >
        {todo.todo}
      </div>
      <div>
        <button onClick={() => removeTodo(todo.id)}>Delete</button>
        <button onClick={() => editTodo(todo)}>Edit</button>
      </div>
    </li>
  );
};

export default TodoItem;
