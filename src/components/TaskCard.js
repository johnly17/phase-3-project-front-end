import EditTask from "./EditTask"

function TaskCard({task, priority, onDelete, id, handleEdit, isEdit, onTaskUpdate}) {

    function handleDelete() {
        fetch(`http://localhost:9292/tasks/${id}`, {
            method: 'DELETE',
        })
        .then((r) => r.json())
        .then((deletedTask) => onDelete(deletedTask))
    }

    // console.log(task)

    return (
        <div className="card">
            <div className="card-task">
                <li>{task}</li>
                <li>Priority: {priority}</li>
                {isEdit ? <EditTask task={task} priority={priority} id={id} onTaskUpdate={onTaskUpdate}/> :
                null}
                <button onClick={handleEdit}>✎</button>
                <button
                onClick={handleDelete}
                >🗑</button>
            </div>
        </div>
    )
}

export default TaskCard