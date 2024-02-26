import React, {useState} from "react";

function ToDoList(){
    let [tasks, setTask] = useState(["Do DSA", "Do DBMS", "Do Development"]);
    let [newTask, setNewTask] = useState("");

    function handleInputChange(event){
        setNewTask(event.target.value);
    }

    function addTask(){
        if(newTask.trim() !== ""){
            setTask(t => [...t, newTask]);
            setNewTask("");
        }
    }

    function deleteTask(index){
        let updated = tasks.filter((_, i) => i !== index);
        setTask(updated);
    }

    function moveTaskUp(index){
        if(index > 0){
            let updated = [...tasks];
            [updated[index], updated[index -1]] = [updated[index -1], updated[index]];
            setTask(updated);
        }
    }

    function moveTaskDown(index){
        if(index < tasks.length -1){
            let updated = [...tasks];
            [updated[index], updated[index +1]] = [updated[index +1], updated[index]];
            setTask(updated);
        }
    }

    return(
        <div className="to-do-list">
            <h1>To-Do-List</h1>

            <div>
                <input
                    type="text"
                    placeholder="Enter a task..."
                    value={newTask}
                    onChange={handleInputChange}/>
                <button
                    className="to-do-button"
                    onClick={addTask}>
                        Add
                </button>
            </div>

            <ol>
                {tasks.map((task, index) => 
                    <li key={index}>
                        <span className="text">{task}</span>
                        <button className="delete-button" onClick={() => deleteTask(index)}>Delete</button>
                        <button className="move-button" onClick={() => moveTaskUp(index)}>👆</button>
                        <button className="move-button" onClick={() => moveTaskDown(index)}>👇</button>
                    </li>
                )}
            </ol>
        </div>
    );
}

export default ToDoList;