import React from "react";
import KanbanBoard from "./components/KanbanBoard/KanbanBoard";
import Menu from "./components/Menu/Menu";
import "./App.css";

const App = () => (
  <div className="App">
    <Menu />
    <KanbanBoard />
  </div>
);

export default App;
