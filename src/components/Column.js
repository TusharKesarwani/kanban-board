import React from "react";
import Task from "./Task";

const Column = ({ status, tasks, onEdit, onDelete }) => (
  <div className="column">
    <h2>{`${status.charAt(0).toUpperCase() + status.slice(1)} (${
      tasks.filter((task) => task.status === status).length
    })`}</h2>
    <hr />
    {tasks
      .filter((task) => task.status === status)
      .map((task) => (
        <Task key={task._id} task={task} onEdit={onEdit} onDelete={onDelete} />
      ))}
  </div>
);

export default Column;
