import React from "react";
import Modal from "react-modal";
import "./EditTaskModal.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

Modal.setAppElement("#root");

const EditTaskModal = ({ isOpen, onRequestClose, task, onChange, onSave }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onChange({ ...task, [name]: value });
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Edit Task"
    >
      <div className="container">
        <h2>Edit Task:</h2>
        <div className="edit-task-container">
          <TextField
            className="text-field"
            id="standard-basic"
            label="Title"
            variant="standard"
            name="title"
            value={task.title}
            onChange={handleChange}
            autoComplete="off"
          />
          <TextField
            className="text-field"
            id="standard-basic"
            label="Description"
            variant="standard"
            name="description"
            value={task.description}
            onChange={handleChange}
            autoComplete="off"
          />
          <FormControl variant="standard" sx={{ minWidth: 120 }}>
            <InputLabel id="demo-simple-select-standard-label">
              Status
            </InputLabel>
            <Select
              id="demo-simple-select-standard"
              value={task.status}
              onChange={handleChange}
              name="status"
              label="Status"
            >
              <MenuItem value={"To Do"}>To Do</MenuItem>
              <MenuItem value={"On Progress"}>On Progress</MenuItem>
              <MenuItem value={"Done"}>Done</MenuItem>
            </Select>
          </FormControl>
          <div>
            <Button variant="contained" onClick={() => onSave(task)}>
              Save
            </Button>
            <Button variant="contained" onClick={onRequestClose}>
              Cancel
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default EditTaskModal;
