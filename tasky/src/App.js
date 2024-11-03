
import './App.css';
import Task from './components/Task';
import React, { useState } from 'react';

function App() {
  const [ taskState, setTaskState ] = useState({
    tasks: [
      { title:"Dishes", description: "Empty dishwasher", deadline: "Today" },
      { title: "Laundry", description: "Fold clothes and put away", deadline: "Tomorrow" },
      { title: "Tidy up", deadline: "Today" }
    ]
  });
  return (
    <div className="container">
     <h1>Tasky</h1>
     <Task title="Dishes" deadline="Today" description="Washthem dishes now" >
      
      </Task>
     <Task title="Laundry" deadline="Tommorow" description="Fold the clothes now">
      
      </Task>
     <Task title="Tidy" deadline="Today" />
    </div>
  );
}

export default App;
