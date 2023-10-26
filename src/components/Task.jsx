import "./Task.css";
import { useState } from "react";

const Task = ({ tasks, setTasks }) => {
  const [hovered, setHovered] = useState(false);

  // "complete" task functionality

  const handleCheck = (id) => {
    const newTasks = tasks.map((item) => {
      if (item.id === id) {
        item.complete = !item.complete;
      }
      return item;
    });

    setTasks(newTasks);
  };

  //   show delete button functionality

  const handleMouseEnter = (id) => {
    setHovered(id);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  //   delete the li functiononality
  const clickHandler = (id) => {
    console.log(`going to delete ${id}`);
    let filteredTasks = tasks.filter((item) => {
      return item.id !== id;
    });
    setTasks(filteredTasks);
  };

  //draggable functionality
  const handleDragStart = (e, index) => {
    e.dataTransfer.setData("index", index);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, newIndex) => {
    const oldIndex = e.dataTransfer.getData("index");
    const updatedTasks = [...tasks];
    const [movedTask] = updatedTasks.splice(oldIndex, 1);
    updatedTasks.splice(newIndex, 0, movedTask);
    setTasks(updatedTasks);
  };

  return (
    <ul className="output__container">
      {tasks.map((item, index) => {
        return (
          <li
            id={item.id}
            key={index}
            className={!item.complete ? "ind__task" : "ind__task complete"}
            onMouseEnter={() => handleMouseEnter(item.id)}
            onMouseLeave={() => handleMouseLeave(item.id)}
            draggable
            onDragStart={(e) => handleDragStart(e, index)}
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, index)}
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
