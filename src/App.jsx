import React, { useState, useEffect } from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import FilterBar from "./components/FilterBar";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");

  // load from localStorage once
  useEffect(() => {
    try {
      const stored = JSON.parse(localStorage.getItem("tasks")) || [];
      setTasks(stored);
    } catch {
      setTasks([]);
    }
  }, []);

  // save whenever tasks change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Add new task
  const addTask = (text) => {
    const newTask = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTasks((prev) => [...prev, newTask]);
  };

  // Toggle completed
  const toggleTask = (id) => {
    setTasks((prev) => prev.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  // Delete
  const deleteTask = (id) => {
    setTasks((prev) => prev.filter(t => t.id !== id));
  };

  // Filtered tasks for view
  const filteredTasks = tasks.filter((t) => {
    if (filter === "completed") return t.completed;
    if (filter === "pending") return !t.completed;
    return true;
  });

  return (
    <div className="min-h-screen bg-[#F1F5F9] flex flex-col items-center p-5">
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">Task Manager</h1>

      <TaskInput onAdd={addTask} />
      <FilterBar filter={filter} setFilter={setFilter} />
      <TaskList tasks={filteredTasks} onToggle={toggleTask} onDelete={deleteTask} />
    </div>
  );
}

