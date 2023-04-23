import { useState } from 'react'

import './App.css'

function App() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [editId, setEditId] = useState(0)

  const handleSubmit = (e) => {
    e.preventDefault()

    if (editId) {
      const editTodo = todoList.find((todo) => todo.id === editId)
      const updatedTodoList = todoList.map((obj, i) => obj.id === editTodo.id ? (obj = { id: obj.id, todo }) : { id: obj.id, todo: obj.todo })
      setTodoList(updatedTodoList)
      setEditId(0);
      setTodo("");
      return;
    }

    if (todo !== "") {
      setTodoList([...todoList, { id: `${todo}-${Date.now()} `, todo: todo }])
      setTodo("")
    }
  }
  const handleEdit = (id) => {
    const editTodo = todoList.find((todo) => todo.id === id)
    setTodo(editTodo.todo)
    setEditId(id)
  }
  const handleDelete = (id) => {
    const delTodo = todoList.filter((todo) => todo.id !== id)
    setTodoList([...delTodo])
  }
  return (
    <div className='App'>
      <div className="container">
        <h1>Hello World</h1>
        <form className='todoForm' onSubmit={handleSubmit}>
          <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)} />
          <button type='submit'>{editId ? "Edit" : "Go"}</button>
        </form>
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
      </div>
    </div>
  )
}

export default App
