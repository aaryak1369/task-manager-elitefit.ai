// src/components/Dashboard.js
import React, { useState, useEffect } from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import { getTasks, saveTasks } from '../utils/taskUtils';

import { RiSortAsc } from "react-icons/ri";
import { FiSearch } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";

import '../styles/Dashboard.css'

const Dashboard = () => {

    const [darkMode, setDarkMode] = useState(false);
    const toggleTheme = () => setDarkMode(!darkMode);
    const [tasks, setTasks] = useState(getTasks());
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        saveTasks(tasks);
    }, [tasks]);

    const addTask = (task) => setTasks([...tasks, task]);
    const deleteTask = (id) => setTasks(tasks.filter(task => task.id !== id));
    const updateTask = (updatedTask) => setTasks(tasks.map(task => (task.id === updatedTask.id ? updatedTask : task)));

    // Filter tasks based on search query
    const filteredTasks = tasks.filter(task => 
        task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        task.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Clear search query
    const clearSearch = () => setSearchQuery('');

    return (
        <div className={`dashboard${darkMode?'dark':''}`}>
            <header className="dashboard-header">
                <div className="dashboard-logo">
                    <span role="img" aria-label="logo">icon</span>
                    <h1>Task Manager</h1>
                </div>
                <div className="search-bar">
                    <FiSearch/>
                    <input 
                        type="text" 
                        placeholder="Search tasks..." 
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}/>
                    {searchQuery && (
                        <button className="clear-search" onClick={clearSearch}>
                            <RxCross1 />
                        </button>
                    )}
                </div>
                <button className=""><RiSortAsc /></button>
                <button className="theme-toggle" onClick={toggleTheme}>{darkMode ? '🌞' : '🌙'}</button>
            </header>
            <main>
                <TaskForm onAddTask={addTask} />
                <TaskList tasks={filteredTasks} onDeleteTask={deleteTask} onUpdateTask={updateTask} />
            </main>
        </div>
    );
};

export default Dashboard;
