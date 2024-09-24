
import './App.css';
import Task from './components/Task';

function App() {
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
