import "./App.css";
import { ToDoList } from "./components";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <b>{window.REACT_APP_ENVIRONMENT}</b>
        </p>
      </header>
      <div className="App-body">
        <ToDoList />
      </div>
    </div>
  );
}

export default App;
