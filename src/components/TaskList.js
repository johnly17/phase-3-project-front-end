import TaskCard from './TaskCard'

function TaskList({tasks, setTasks, handleEdit, isEdit, onTaskUpdate}) {

    function onDelete(deletedTask) {
        const updatedTasks = tasks.filter(task => task.id !== deletedTask.id)
        setTasks(updatedTasks)
    }

    // function onUpdate(updatedTask) {
    //     const updatedTasks = tasks.map(task => {
    //         if (task.id === updatedTask.id) {
    //             return updatedTask
    //         }
    //         return task
    //     })
    //     setTasks(updatedTasks)
    // }

    const taskDiv = tasks.map(task => {
        return <TaskCard
        onDelete={onDelete}
        id = {task.id} 
        key={task.id} 
        task={task.name} 
        priority={task.category.priority}
        handleEdit={handleEdit}
        isEdit={isEdit}
        onTaskUpdate={onTaskUpdate}
        />
    })

    return (
        <div className="task-list">
            <h3>My Tasks</h3>
            {taskDiv}
        </div>
    )
}

export default TaskList