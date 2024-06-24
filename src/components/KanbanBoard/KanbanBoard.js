import React, { useEffect, useState } from "react";
import axios from "axios";
import Column from "../Column/Column";
import EditTaskModal from "../EditTaskModal/EditTaskModal";
import AddTask from "../AddTask/AddTask";
import "./KanbanBoard.css";

const KanbanBoard = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    status: "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const response = await axios.get(
      "https://kanban-board-5rrw.onrender.com/api/tasks"
    );
    setTasks(response.data);
  };

  const createTask = async () => {
    const response = await axios.post(
      "https://kanban-board-5rrw.onrender.com/api/tasks",
      newTask
    );
    setTasks([...tasks, response.data]);
    setNewTask({ title: "", description: "", status: "" });
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
    await axios.delete(
      `https://kanban-board-5rrw.onrender.com/api/tasks/${id}`
    );
    setTasks(tasks.filter((t) => t._id !== id));
  };

  const handleModalChange = (updatedTask) => {
    setSelectedTask(updatedTask);
  };

  return (
    <div className="kanban-board">
      <AddTask
        createTask={createTask}
        newTask={newTask}
        setNewTask={setNewTask}
      />
      <div className="columns">
        {["To Do", "On Progress", "Done"].map((status) =>
          tasks.filter((task) => task.status === status).length > 0 ? (
            <Column
              key={status}
              status={status}
              tasks={tasks}
              onEdit={editTask}
              onDelete={deleteTask}
            />
          ) : (
            ""
          )
        )}
        {tasks.length === 0 ? <h1 className="no-task">No Tasks</h1> : ""}
      </div>
      <div>
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
    </div>
  );
};

export default KanbanBoard;
