import React, { useState } from "react";
import "./Todoform.css";

export const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addTodo(value);
      setValue("");
    }
  };
  return (
    <form className="TodoForm" onSubmit={handleKeyPress}>
      <div className="inputIcon"></div>
      <input
        type="text"
        className="todo-input"
        placeholder="Create a new todo…"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyPress}
      />
    </form>
  );
};
