import React, { useState } from "react";


const TodoList = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([
    "Make the bed",
    "Wash my hands",
    "Eat",
    "Walk the dog"
  ]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && task.trim() !== "") {
      setTasks([...tasks, task.trim()]);
      setTask("");
    }
  };

  const handleDelete = (indexToDelete) => {
    setTasks(tasks.filter((_, index) => index !== indexToDelete));
  };

  return (
    <div className="todo-container mx-auto mt-5 p-4 shadow">
      <h1 className="text-center text-muted display-4">todos</h1>
      <input
        type="text"
        className="form-control border-0 shadow-none"
        placeholder="What needs to be done?"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <ul className="list-group mt-2">
        {tasks.length > 0 ? (
          tasks.map((t, index) => (
            <li
              className="list-group-item d-flex justify-content-between align-items-center todo-item"
              key={index}
            >
              {t}
              <button
                className="btn btn-sm btn-outline-danger delete-btn"
                onClick={() => handleDelete(index)}
              >
                ❌
              </button>
            </li>
          ))
        ) : (
          <li className="list-group-item text-muted">No hay tareas, añadir tareas</li>
        )}
      </ul>
      <div className="text-muted mt-2 small">{tasks.length} item{tasks.length !== 1 && "s"} left</div>
    </div>
  );
};

export default TodoList;