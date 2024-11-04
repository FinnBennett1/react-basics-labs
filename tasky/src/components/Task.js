import React from "react";

const Task = (props) => {
    // Add conditional styling for priority
    const priorityStyles = {
      low: { color: 'green' },
      medium: { color: 'orange' },
      high: { color: 'red' }
    };
  
    return (
      <div className="card">
        <p>{props.title}</p>
        <p>Due: {props.deadline}</p>
        <p>{props.description}</p>
        <p style={priorityStyles[props.priority]}>Priority: {props.priority}</p>
        <button onClick={props.markDone} className="doneButton">Done</button>
        <button onClick={props.deleteTask} className="deleteButton">Delete</button>
      </div>
    );
}

export default Task;