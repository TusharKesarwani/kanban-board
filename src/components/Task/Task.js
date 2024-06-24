import React from "react";
import "./Task.css";
import IconButton from "@mui/material/IconButton";
import ModeEditRoundedIcon from "@mui/icons-material/ModeEditRounded";
import DeleteIcon from "@mui/icons-material/Delete";

const Task = ({ task, onEdit, onDelete }) => (
  <div className="task">
    <h3>{task.title}</h3>
    <p>{task.description}</p>
    <p>{new Date(task.date).toLocaleString()}</p>
    <IconButton onClick={() => onEdit(task)} variant="contained">
      <ModeEditRoundedIcon></ModeEditRoundedIcon>
    </IconButton>
    <IconButton onClick={() => onDelete(task._id)} variant="contained">
      <DeleteIcon></DeleteIcon>
    </IconButton>
  </div>
);

export default Task;
