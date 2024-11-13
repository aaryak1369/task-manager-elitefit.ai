// src/components/Task.js
import React from 'react';
import '../styles/Task.css'

const Task = ({ task, onDeleteTask, onUpdateTask, icon }) => {
    const handleComplete = () => {
        onUpdateTask({ ...task, completed: true });
    };
    return (
    <div className="task-card">
        <div className='div1'>
            <div className="task-icon">{icon}</div>
            <div className="task-priority">{task.priority}</div>
        </div>
        <div className="task-content">
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <div className='div2'>
                <p>Due: {new Date(task.dueDate).toLocaleDateString()}</p>
                <button className='btn1' onClick={handleComplete} >Complete</button>
                <button onClick={() => onDeleteTask(task.id)}>Delete</button>
            </div>
            
             {/* <div className="task-actions"> 
             <button onClick={() => onUpdateTask(task.id)}>Complete</button>
                <button onClick={() => onDeleteTask(task.id)}>Delete</button>
            </div> */}
            
        </div>
    </div>
    );
};

export default Task;


