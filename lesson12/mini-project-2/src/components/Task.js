import React from 'react'

function Task({ renderTask, onEdit,onDelete }) {
    //hiển thị theo từng class một
    let elementLevel = "";
    if (renderTask.level === 0 || renderTask.level === "0") {
        elementLevel = <span className="label label-default">small</span>
    } else if (renderTask.level === 1 || renderTask.level === "1") {
        elementLevel = <span className="label label-info">Medium</span>
    } else {
        elementLevel = <span className="label label-danger">high</span>
    }
    //sửa
    const handleEdit = (task) => {
        onEdit(true, task);
    }

    // xóa
    const handleDelete=(task)=>{
        onDelete(task)
    }
    return (
        <tr>
            <td className="text-center">{renderTask.taskId}</td>
            <td>
                {renderTask.taskName}
            </td>
            <td className="text-center">
                {elementLevel}
            </td>
            <td>
                <button type="button" className="btn btn-warning"
                    onClick={() => handleEdit(renderTask)}
                >
                    Edit
                </button>
                <button type="button" className="btn btn-danger"
                
                onClick={()=>handleDelete(renderTask)}>
                    Delete
                </button>
            </td>
        </tr>
    )
}

export default Task