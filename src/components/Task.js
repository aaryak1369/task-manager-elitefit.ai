// src/components/Task.js
import React from 'react';

const Task = ({ task, onDeleteTask, onUpdateTask }) => {
  return (
    <div className={`task ${task.priority.toLowerCase()}`}>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p>Due: {task.dueDate}</p>
      <p>Priority: {task.priority}</p>
      <button onClick={() => onUpdateTask({ ...task, completed: !task.completed })}>
        {task.completed ? 'Mark Incomplete' : 'Mark Complete'}
      </button>
      <button onClick={() => onDeleteTask(task.id)}>Delete</button>
    </div>
  );
};

export default Task;
