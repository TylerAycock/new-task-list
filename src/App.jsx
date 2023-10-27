import "./App.css";
import { useState } from "react";
import Task from "./components/Task";
import { HiOutlineMoon } from "react-icons/hi";

function App() {
  const [tasks, setTasks] = useState([]);

  const [input, setInput] = useState({
    id: 0,
    text: "",
    complete: false,
  });

  const changeHandler = (e) => {
    setInput({
      id: Math.floor(Math.random() * 100),
      text: e.target.value,
      complete: false,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setTasks([...tasks, input]);
    setInput({
      id: 0,
      text: "",
      complete: false,
    });
  };

  const deleteHandler = () => {
    let incompelte = tasks.filter((item) => {
      return !item.complete;
    });
    setTasks(incompelte);
  };

  return (
    <div className=".wrapper">
      <header>
        <div className="heading__container">
          <h1>todo</h1>
          <HiOutlineMoon className="moon" />
        </div>
      </header>
      <main>
        <div className="input__container">
          <form onSubmit={submitHandler}>
            <input
              type="text"
              value={input.text}
              onChange={changeHandler}
              placeholder="Create a new todo..."
            />
          </form>
        </div>
        <Task tasks={tasks} setTasks={setTasks} />
        {tasks.length > 0 && (
          <div className="functionality">
            <button className="clear" onClick={() => deleteHandler()}>
              Clear Completed
            </button>
            <p>Drag and drop to reorder list</p>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
