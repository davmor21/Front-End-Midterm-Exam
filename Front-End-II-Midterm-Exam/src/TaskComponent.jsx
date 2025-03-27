import {Component} from 'react'
function TaskComponent(){
    
    // Don't know what you specifically meant so I assumed to just use your tasks
    const tasks = [
      {id: 1, task: "Use Props to Pass Data"}, 
      {id: 2, task: "Manage State with useState"}, 
      {id: 3, task: "Display a List with Keys"}, 
      {id: 4, task: "Pass Functions as Props"},
      {id: 5, task: "Create a Controlled Form"}
                  ];

    return (
      <>
        <h3>Your Tasks:<br></br>
            {tasks.map(task => (
              <p key = {task.id}>Task {task.id}: {task.task}</p>
            ))}
        </h3>
      </>
    )
  }
export default TaskComponent