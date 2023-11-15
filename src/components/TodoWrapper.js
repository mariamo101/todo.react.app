import React, { useState, useEffect } from "react";
import { Todo } from "./Todo";
import { TodoForm } from "./TodoForm";
import { v4 as uuidv4 } from "uuid";
uuidv4();

export const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
  };

  const toggleCompleted = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  useEffect(() => {
    const itemsLeft = todos.filter((todo) => !todo.completed).length;
    setItemsLeft(itemsLeft);
  }, [todos]);
  const [itemsLeft, setItemsLeft] = useState(0);

  const clearCompletedTodos = () => {
    const activeTodos = todos.filter((todo) => !todo.completed);
    setTodos(activeTodos);
  };

  return (
    <div className="TodoWrapper">
      <TodoForm addTodo={addTodo} />
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          task={todo}
          toggleCompleted={toggleCompleted}
          deleteTodo={deleteTodo}
          todos={todos}
          setTodos={setTodos}
        />
      ))}
      <div className="itemsOutLine">
        <h3 className="items">
          {itemsLeft} {itemsLeft === 1 ? "item left" : "items left"}
        </h3>
        <button className="clearCompleted" onClick={clearCompletedTodos}>
          Clear Completed
        </button>
      </div>
    </div>
  );
};
