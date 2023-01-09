import React, { useState } from 'react';

function EditTask({ task, priority, id, onTaskUpdate }) {

    const [name, setName] = useState(task)
    const [taskCategory, setTaskCategory] = useState(priority)

    function handleFormSubmit(e) {
        e.preventDefault();
        fetch(`http://localhost:9292/tasks/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                category_id: taskCategory
            })
        })
            .then(r => r.json())
            .then((data) => onTaskUpdate(data))
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <input
            className='edit-task'
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <select className='edit-select' onChange={e => setTaskCategory(e.target.value)}>
                <option value="">Select Priority</option>
                <option value="1">High</option>
                <option value="2">Medium</option>
                <option value="3">Low</option>
            </select>
            <input className="save-btn" type="submit" value="save" />
        </form>
    )


}

export default EditTask;
