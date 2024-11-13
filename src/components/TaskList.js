// src/components/TaskList.js
import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, onDeleteTask, onUpdateTask }) => {
  const filterTasks = (status) => tasks.filter(task => task.completed === status);

  return (
    <div className="task-list">
      <h2>Upcoming Tasks</h2>
      {filterTasks(false).map(task => (
        <Task key={task.id} task={task} onDeleteTask={onDeleteTask} onUpdateTask={onUpdateTask} />
      ))}
      <h2>Completed Tasks</h2>
      {filterTasks(true).map(task => (
        <Task key={task.id} task={task} onDeleteTask={onDeleteTask} onUpdateTask={onUpdateTask} />
      ))}
    </div>
  );
};

export default TaskList;
