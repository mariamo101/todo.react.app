import React, { useState } from "react";
import "./Todo.css";
import cross from "../images/icon-cross.svg";

export const Todo = ({
  task,
  toggleCompleted,
  deleteTodo,
  todos,
  setTodos,
}) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleButtonClick = () => {
    toggleCompleted(task.id);
    setIsChecked(!isChecked);
  };

  const handleDeleteClick = () => {
    setTodos(todos.filter((todo) => todo.id !== task.id));
    deleteTodo(task.id);
  };

  return (
    <div className="Todo">
      <div className="TodoInputTodo">
        <div className="iconCheck">
          <button
            onClick={handleButtonClick}
            className={`checkButton ${task.completed ? "completed" : ""}`}
          >
            <div className={`checkIcon ${isChecked ? "checked" : ""}`}></div>
          </button>
          <p className="inputP">{task.task}</p>
        </div>
        <div className="iconCross">
          <img
            src={cross}
            alt="Cross icon"
            className="crossIcon"
            onClick={handleDeleteClick}
          />
        </div>
      </div>
    </div>
  );
};
