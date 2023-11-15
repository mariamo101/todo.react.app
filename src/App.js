import "./App.css";
import { TodoHead } from "./components/TodoHead";
import { TodoWrapper } from "./components/TodoWrapper";
import { TodoFooter } from "./components/TodoFooter";

function App() {
  return (
    <div className="App">
      <div>
        <TodoHead />
        <TodoWrapper />
        <TodoFooter />
        <h1>Drag and drop to reorder list</h1>
      </div>
    </div>
  );
}

export default App;
