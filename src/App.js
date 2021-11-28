import React, { useState, useEffect } from 'react';
import TodoList from './components/TodoList';
import AddItemForm from './components/AddItemForm';
import EditItemForm from './components/EditItemForm';
import FilterButton from './components/FilterButton';

import './App.css';

const FILTER_MAP = {
  All: () => true,
  Active: (todo) => !todo.completed,
  Completed: (todo) => todo.completed,
};
const FILTER_NAMES = Object.keys(FILTER_MAP);

function App() {
  const initialState = [
    {
      id: 1,
      todo: 'Complete online JavaScript course',
      completed: true,
    },
    {
      id: 2,
      todo: 'Jog around the park 3x',
      completed: false,
    },
    { id: 3, todo: '10 minutes meditation', completed: false },
    { id: 4, todo: 'Read for 1 hour', completed: false },
    { id: 5, todo: 'Pick up groceries', completed: false },
    { id: 6, todo: 'Complete Todo App on Frontend Mentor', completed: false },
  ];

  const [todos, setTodos] = useState(initialState);
  const [isEditing, setIsEditing] = useState(false);
  const initialEditState = {
    id: null,
    todo: '',
    completed: false,
  };

  const [currentTodo, setCurrentTodo] = useState(initialEditState);
  const [pending, setPending] = useState(null);
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    setPending(todos.filter((todo) => !todo.completed).length);
  }, [todos]);

  const addTodo = (todo) => {
    todo.Appid = todos.length + 1;
    setTodos([...todos, todo]);
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed === true
      ? (newTodos[index].completed = false)
      : (newTodos[index].completed = true);
    setTodos(newTodos);
  };

  const editTodo = (todo) => {
    setIsEditing(true);
    setCurrentTodo({
      id: todo.id,
      todo: todo.todo,
      completed: todo.completed,
    });
  };

  const updateTodo = (id, updatedTodo) => {
    setIsEditing(false);
    setTodos(todos.map((todo) => (todo.id === id ? updatedTodo : todo)));
  };

  const clearCompleted = () => {
    const newTodos = [...todos];
    setTodos(newTodos.filter((todo) => todo.completed === false));
  };

  const filterList = FILTER_NAMES.map((name) => (
    <FilterButton
      key={name}
      name={name}
      isPressed={name === filter}
      setFilter={setFilter}
    />
  ));

  return (
    <div className="App">
      {isEditing ? (
        <EditItemForm
          currentTodo={currentTodo}
          updateTodo={updateTodo}
          setIsEditing={setIsEditing}
        />
      ) : (
        <AddItemForm addTodo={addTodo} />
      )}

      <TodoList
        todos={todos}
        removeTodo={removeTodo}
        completeTodo={completeTodo}
        editTodo={editTodo}
        pending={pending}
        clearCompleted={clearCompleted}
        filterList={filterList}
        mapNames={FILTER_MAP}
        filter={filter}
      />
    </div>
  );
}

export default App;
