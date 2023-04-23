import React from 'react'

const TodoList = ({ todoList, handleEdit, handleDelete }) => {
    return (
        <ul className='allTodos'>
            {
                todoList.map((obj, i) => {
                    return (<li className='singleTodo' key={obj.id}>
                        <span className='todoText'>{obj.todo}</span>
                        <button onClick={() => handleEdit(obj.id)}>Edit</button>
                        <button onClick={() => handleDelete(obj.id)}>Delete</button>
                    </li>)
                })
            }
        </ul>
    )
}

export default TodoList