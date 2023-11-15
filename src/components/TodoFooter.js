import React from "react";
import "./TodoFooter.css";

export const TodoFooter = () => {
  return (
    <div className="TodoFooter">
      <button className="showAll"> All </button>
      <button className="showActive"> Active </button>
      <button className="showCompleted"> Completed </button>
    </div>
  );
};
