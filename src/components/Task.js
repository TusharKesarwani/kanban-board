import React from "react";

const Task = ({ task, onEdit, onDelete }) => (
  <div className="task">
    <h3>{task.title}</h3>
    <p>{task.description}</p>
    <p>{new Date(task.date).toLocaleString()}</p>
    <button onClick={() => onEdit(task)} class="m-1">Edit</button>
    <button onClick={() => onDelete(task._id)} class="m-1">Delete</button>
  </div>
);

export default Task;
