import React from "react";

const Task = ({ task, deleteTask }) => {
  return (
    <div className="task">
      <span>{task.text}</span>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </div>
  );
};

export default Task;
