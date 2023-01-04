import NewTask from './NewTask'
import TaskList from './TaskList'

import React, { useState, useEffect } from 'react'

function TaskListContainer() {

    const [tasks, setTasks] = useState([])
    const [isEdit, setIsEdit] = useState(false)
    // console.log(tasks)

    useEffect(() => {
        fetch('http://localhost:9292/tasks')
            .then(res => res.json())
            .then(data => { setTasks(data) })
    }, [])

    function addNewTask(newTaskObj) {
        setTasks([...tasks, newTaskObj])
    }

    function onUpdate(updatedTask) {
        const updatedTasks = tasks.map(task => {
            if (task.id === updatedTask.id) {
                return updatedTask
            }
            return task
        })
        setTasks(updatedTasks)
    }

    function onTaskUpdate(updatedTask) {
        onUpdate(updatedTask)
        setIsEdit(false)
    }

    function handleEdit() {
        setIsEdit(!isEdit)
    }

    return (
        <div className="task-container">
            <NewTask addNewTask={addNewTask} />
            <TaskList tasks={tasks} setTasks={setTasks} handleEdit={handleEdit} isEdit={isEdit} onTaskUpdate={onTaskUpdate}/>
        </div>
    )

}


export default TaskListContainer