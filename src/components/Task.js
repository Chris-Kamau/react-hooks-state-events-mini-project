import React from "react";

function Task(props) {
  const { task, onDelete } = props;

  const handleDelete = (id) => {
    onDelete(id);
  };

  return (
    <div className="task">
      <div className="label">{task.category}</div>
      <div className="text">{task.text}</div>
      <button className="delete" onClick={() => handleDelete(task.id)}>
        X
      </button>
    </div>
  );
}

export default Task;
