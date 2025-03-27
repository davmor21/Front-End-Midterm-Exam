import { useState } from 'react';
import TaskForm from './TaskForm';
import './App.css';

function TaskComponent() {
  const initialTasks = [
    { task: "Use Props to Pass Data" },
    { task: "Manage State with useState" },
    { task: "Display a List with Keys" },
    { task: "Pass Functions as Props" },
    { task: "Create a Controlled Form" }
  ];

  const [tasks, setTasks] = useState(initialTasks);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const sortAlphabetically = () => {
    const sortedItems = [...tasks].sort((a, b) => a.task.localeCompare(b.task));
    setTasks(sortedItems);
  };

  const handleAddTask = (newTask) => {
    setTasks(prev => [...prev, newTask]);
  };

  const handleDelete = (index) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this task?");
    if (confirmDelete) {
      const updatedTasks = [...tasks];
      updatedTasks.splice(index, 1);
      setTasks(updatedTasks);
    }
  };

  const filteredTasks = tasks.filter((item) =>
    item.task.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div id='TaskSearchDiv'>
        <h3>Your Tasks:</h3>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearch}
        />
        <button onClick={sortAlphabetically}>Sort A-Z</button>
      </div>

      <ul>
        {filteredTasks.map((task, index) => (
          <li key={index} style={{padding:'10px'}}>
            {task.task} <button onClick={() => handleDelete(index)} style={{'background-color': 'red', 'margin-left':'15px', 'padding': '10px'}}>Delete</button>
          </li>
        ))}
      </ul>

      

      <h4>Add a Task:</h4>
      <TaskForm onAddTask={handleAddTask} />
    </>
  );
}

export default TaskComponent;
