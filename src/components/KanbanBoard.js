import React, { useEffect, useState } from "react";
import axios from "axios";
import Column from "./Column";
import EditTaskModal from "./EditTaskModal";
import Task from "./Task";

const KanbanBoard = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    status: "To Do",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const response = await axios.get("https://kanban-board-5rrw.onrender.com/api/tasks");
    setTasks(response.data);
  };

  const createTask = async () => {
    const response = await axios.post(
      "https://kanban-board-5rrw.onrender.com/api/tasks",
      newTask
    );
    setTasks([...tasks, response.data]);
  };

  const editTask = (task) => {
    setSelectedTask(task);
    setIsModalOpen(true);
  };

  const saveTask = async (task) => {
    const response = await axios.put(
      `https://kanban-board-5rrw.onrender.com/api/tasks/${task._id}`,
      task
    );
    setTasks(tasks.map((t) => (t._id === task._id ? response.data : t)));
    setIsModalOpen(false);
  };

  const deleteTask = async (id) => {
    await axios.delete(`https://kanban-board-5rrw.onrender.com/api/tasks/${id}`);
    setTasks(tasks.filter((t) => t._id !== id));
  };

  const handleModalChange = (updatedTask) => {
    setSelectedTask(updatedTask);
  };

  return (
    <div className="kanban-board">
      <div class="add-task">
        <input
          type="text"
          placeholder="Title"
          value={newTask.title}
          onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
          class="m-2 p-2"
        />
        <textarea
          placeholder="Description"
          value={newTask.description}
          onChange={(e) =>
            setNewTask({ ...newTask, description: e.target.value })
          }
          class="m-2 p-2"
        ></textarea>
        <button onClick={createTask}>Add Task</button>
      </div>

      <div className="columns">
        {["To Do", "On Progress", "Done"].map((status) => (
          <Column
            key={status}
            status={status}
            tasks={tasks}
            onEdit={editTask}
            onDelete={deleteTask}
          />
        ))}
      </div>

      {selectedTask && (
        <EditTaskModal
          isOpen={isModalOpen}
          onRequestClose={() => setIsModalOpen(false)}
          task={selectedTask}
          onChange={handleModalChange}
          onSave={saveTask}
        />
      )}
    </div>
  );
};

export default KanbanBoard;
