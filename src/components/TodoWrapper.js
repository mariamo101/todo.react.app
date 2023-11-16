import React, { useState, useEffect } from "react";
import { Todo } from "./Todo";
import { TodoForm } from "./TodoForm";
import { v4 as uuidv4 } from "uuid";
import TodoFooter from "./TodoFooter";
uuidv4();

export const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);
  const [filterType, setFilterType] = useState("showAll");

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

  const filterTodos = () => {
    switch (filterType) {
      case "showActive":
        return todos.filter((todo) => !todo.completed);
      case "showCompleted":
        return todos.filter((todo) => todo.completed);
      default:
        return todos;
    }
  };

  return (
    <div className="TodoWrapper">
      <TodoForm addTodo={addTodo} />
      {filterTodos().map((todo) => (
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
      <TodoFooter setFilterType={setFilterType} />
    </div>
  );
};
