import React from "react";
import { useState } from "react";

function ToDoList() {
    const [tasks, setTasks] = useState(["Eat Breakfast", "Do exercise", "Take shower"])
    const [newTask, setNewTask] = useState('')

    function HandleChange(event) {
        setNewTask(event.target.value)
    }

    function addTask() {
        if(newTask.trim() !== ""  ){
            setTasks(t => [...t, newTask]);
            console.log(newTask);
            setNewTask("");
            console.log(tasks);
        }


    }

    function deleteTask(index) {
        const updatedTask = tasks.filter(( _, i)=> i !== index);
        setTasks(updatedTask);

    }

    function moveTaskUp(index) {
        if(index > 0){
            const updatedTask = [...tasks];
            [updatedTask[index], updatedTask[index-1] ] = 
            [updatedTask[index - 1], updatedTask[index]];
            setTasks(updatedTask);
        }
    }

    function moveTaskDown(index) {
        if(index < tasks.length - 1 ){
            const updatedTask = [...tasks];
            [updatedTask[index], updatedTask[index + 1] ] = 
            [updatedTask[index + 1], updatedTask[index]];
            setTasks(updatedTask);
        }

    }

    return (
        <div className="to-do-list">
            <h1>To-Do-List</h1>
            <div>

                <input
                    type="text"
                    placeholder="Enter a Task.."
                    onChange={HandleChange}
                />
                <button
                    className="Add-button"
                    onClick={addTask}>
                    Add
                </button>

            </div>


            <ol>
                {tasks.map((task, index) =>

                    < li key={index} >
                        <span className="text" >{task}</span>
                        <button
                            className="delete-button"
                            onClick={() => deleteTask(index)}>
                            Delete
                        </button>
                        <button
                            className="moveUp-btn"
                            onClick={() => moveTaskUp(index)}>
                            👆
                        </button>
                        <button
                            className="moveDown-btn"
                            onClick={() => moveTaskDown(index)}>
                            👇
                        </button>

                    </li>

                )}


            </ol>

        </div >
    );
}

export default ToDoList;