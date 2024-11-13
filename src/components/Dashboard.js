// src/components/Dashboard.js
import React, { useState, useEffect } from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import { getTasks, saveTasks } from '../utils/taskUtils';
import '../styles/Dashboard.css'

const Dashboard = () => {

    const [darkMode, setDarkMode] = useState(false);
    const toggleTheme = () => setDarkMode(!darkMode);
  const [tasks, setTasks] = useState(getTasks());

  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);

  const addTask = (task) => setTasks([...tasks, task]);
  const deleteTask = (id) => setTasks(tasks.filter(task => task.id !== id));
  const updateTask = (updatedTask) =>
    setTasks(tasks.map(task => (task.id === updatedTask.id ? updatedTask : task)));

  return (
    <div className={`dashboard${darkMode?'dark':''}`}>
      <header className="dashboard-header">
        <div className="dashboard-logo">
          <span role="img" aria-label="logo">📝</span>
          <h1>Task Manager</h1>
        </div>
        <input type="text" placeholder="Search tasks..." className="search-bar" />
        <button className="theme-toggle" onClick={toggleTheme}>
          {darkMode ? '🌞' : '🌙'}
        </button>
      </header>
      <main>
      <TaskForm onAddTask={addTask} />
      <TaskList tasks={tasks} onDeleteTask={deleteTask} onUpdateTask={updateTask} />
      </main>
    </div>
  );
};

export default Dashboard;
