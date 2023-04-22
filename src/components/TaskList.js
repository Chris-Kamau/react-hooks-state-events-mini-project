import React, { useState } from "react";
import Task from "./Task";

function TaskList(props) {
  const { tasks, selectedCategory } = props;
  const [tasksState, setTasks] = useState(tasks);

  const handleDelete = (id) => {
    const updatedTasks = tasksState.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  const filteredTasks = selectedCategory === "All" ? tasksState : tasksState.filter(task => task.category === selectedCategory);

  return (
    <div className="tasks">
      {filteredTasks.map((task) => (
        <Task key={task.id} task={task} onDelete={() => handleDelete(task.id)} />
      ))}
    </div>
  );
}

export default TaskList;
