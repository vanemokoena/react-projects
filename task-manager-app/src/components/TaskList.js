import React from "react";
import Task from "./Task";

const TaskList = ({ tasks, deleteTask }) => {
  return (
    <div>
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <Task key={task.id} task={task} deleteTask={deleteTask} />
        ))
      ) : (
        <p>No tasks available. Please add a task.</p>
      )}
    </div>
  );
};

export default TaskList;
