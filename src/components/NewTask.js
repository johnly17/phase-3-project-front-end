import React, { useState } from 'react'

function NewTask({ addNewTask }) {

    const [newTask, setNewTask] = useState("");
    const [newPriority, setNewPriority] = useState(null)



    const configObj = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({
            "name": newTask,
            "category_id": newPriority
        })
    }


    function handleNewTask(e) {
        e.preventDefault();
        fetch('http://localhost:9292/tasks', configObj)
            .then(response => response.json())
            .then(data => addNewTask(data))
    }
    return (
        <div className="task-input">
            <div className='task-form'>
                <form onSubmit={handleNewTask}>
                    <div>
                    <label>New Task:
                        <div>
                        <input
                            type="text"
                            name="task"
                            placeholder="Add a task..."
                            value={newTask}
                            className="form__field"
                            onChange={e => setNewTask(e.target.value)}
                        ></input>
                        </div>
                        <div>
                        <select className="new-select"onChange={e => setNewPriority(e.target.value)}>
                            <option value="">Select Priority</option>
                            <option value="1">High</option>
                            <option value="2">Medium</option>
                            <option value="3">Low</option>
                        </select>
                        </div>
                        <input type="submit" value="Submit" className="button-32"></input>
                    </label>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default NewTask;
