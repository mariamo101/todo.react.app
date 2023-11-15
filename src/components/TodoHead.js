import React, { useState } from "react";
import "./Todohead.css";
import todoImage from "../images/todo.svg";
import moon from "../images/icon-moon.svg";
import sun from "../images/icon-sun.svg";

export const TodoHead = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle("dark-mode");
  };

  return (
    <div className="TodoHead">
      <img src={todoImage} alt="T O D O" className="todoImage" />
      <img
        src={isDarkMode ? sun : moon}
        alt=""
        className="moonIcon"
        onClick={handleToggle}
      />
    </div>
  );
};
