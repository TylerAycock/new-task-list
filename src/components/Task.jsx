import "./Task.css";
import { useState } from "react";

const Task = ({ tasks, setTasks }) => {
  const [hovered, setHovered] = useState(false);

  const handleCheck = (id) => {
    const newTasks = tasks.map((item) => {
      if (item.id === id) {
        item.complete = !item.complete;
      }
      return item;
    });

    setTasks(newTasks);
  };

  const handleMouseEnter = (id) => {
    setHovered(id);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const clickHandler = (id) => {
    console.log(`going to delete ${id}`);
    let filteredTasks = tasks.filter((item) => {
      return item.id !== id;
    });
    setTasks(filteredTasks);
  };

  return (
    <ul className="output__container">
      {tasks.map((item) => {
        return (
          <li
            id={item.id}
            key={item.id}
            className={!item.complete ? "ind__task" : "ind__task complete"}
            onMouseEnter={() => handleMouseEnter(item.id)}
            onMouseLeave={() => handleMouseLeave(item.id)}
          >
            <div>
              <input
                type="checkbox"
                checked={item.complete}
                onChange={() => handleCheck(item.id)}
              />
              <p>{item.text}</p>
              {hovered === item.id && (
                <button
                  className="delete"
                  onClick={() => clickHandler(item.id)}
                >
                  X
                </button>
              )}
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default Task;
