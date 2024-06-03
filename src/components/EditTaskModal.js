import React from "react";
import Modal from "react-modal";

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
        <h2>Edit Task</h2>
        <form>
          <div className="form-group m-2">
            <label for="title">Title:</label>
            <input
              type="text"
              className="form-control"
              id="title"
              placeholder="Enter Title"
              name="title"
              value={task.title}
              onChange={handleChange}
            />
          </div>
          <div className="form-group m-2">
            <label for="description">Description:</label>
            <textarea
              type="text"
              className="form-control"
              id="description"
              placeholder="Enter Description"
              name="description"
              value={task.description}
              onChange={handleChange}
            />
          </div>
          <div className="form-group m-2">
            <label for="status">Status:</label>
            <select name="status" value={task.status} onChange={handleChange}>
              <option value="To Do">To Do</option>
              <option value="On Progress">On Progress</option>
              <option value="Done">Done</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary m-2" onClick={() => onSave(task)}>
            Save
          </button>
          <button type="submit" className="btn btn-primary m-2" onClick={onRequestClose}>
            Cancel
          </button>
        </form>
      </div>
    </Modal>
  );
};

export default EditTaskModal;
