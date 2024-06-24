import React from "react";
import "./AddTask.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const AddTask = ({ createTask, newTask, setNewTask }) => {
  return (
    <>
      <div class="add-task">
        <h1>Add Task: </h1>
        <TextField
          className="text-field"
          id="standard-basic"
          label="Enter Task Title"
          variant="standard"
          value={newTask.title}
          onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
          autoComplete="off"
        />
        <TextField
          className="text-field"
          id="standard-basic"
          label="Enter Task Description"
          variant="standard"
          value={newTask.description}
          onChange={(e) =>
            setNewTask({ ...newTask, description: e.target.value })
          }
          autoComplete="off"
        />
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-standard-label">
            Enter Task Status
          </InputLabel>
          <Select
            id="demo-simple-select-standard"
            value={newTask.status}
            onChange={(e) => setNewTask({ ...newTask, status: e.target.value })}
            label="Enter Task Status"
          >
            <MenuItem value={"To Do"}>To Do</MenuItem>
            <MenuItem value={"On Progress"}>On Progress</MenuItem>
            <MenuItem value={"Done"}>Done</MenuItem>
          </Select>
        </FormControl>
        <Button variant="contained" onClick={createTask}>
          Add Task
        </Button>
      </div>
    </>
  );
};

export default AddTask;
