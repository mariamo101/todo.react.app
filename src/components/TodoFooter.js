import "./TodoFooter.css";

export const TodoFooter = ({ setFilterType }) => {
  return (
    <div className="TodoFooter">
      <button className="showAll" onClick={() => setFilterType("showAll")}>
        All
      </button>
      <button
        className="showActive"
        onClick={() => setFilterType("showActive")}
      >
        Active
      </button>
      <button
        className="showCompleted"
        onClick={() => setFilterType("showCompleted")}
      >
        Completed
      </button>
    </div>
  );
};

export default TodoFooter;
