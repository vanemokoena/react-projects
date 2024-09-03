import React, { useState } from "react";

const TaskForm = ({ addTask }) => {
  const [taskInput, setTaskInput] = useState("");

  const handleInputChange = (e) => {
    setTaskInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskInput.trim()) {
      addTask({ id: Date.now(), text: taskInput.trim(), completed: false });
      setTaskInput("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={taskInput}
        onChange={handleInputChange}
        placeholder="Add a new task"
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
