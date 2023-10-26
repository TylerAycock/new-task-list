import "./App.css";
import { useState } from "react";
import Task from "./components/Task";

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

  return (
    <>
      <div className="input__container">
        <h1>todo</h1>
        <form onSubmit={submitHandler}>
          <input type="text" value={input.text} onChange={changeHandler} />
        </form>
      </div>
      <Task tasks={tasks} setTasks={setTasks} />
    </>
  );
}

export default App;
