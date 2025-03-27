import { useState } from 'react';


function TaskForm(){
    const [task, addTask] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Task: " + task);
    };
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={task} onChange={(e) => addTask(e.target.value)} />
                <br />
                <button type="submit">Add Task</button>
            </form>
        </div>
    );
}
export default TaskForm