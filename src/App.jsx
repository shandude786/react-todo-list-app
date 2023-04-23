import { useState } from 'react'

import './App.css'
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

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
        <TodoForm todo={todo} setTodo={setTodo} editId={editId} handleSubmit={handleSubmit} />
        <TodoList todoList={todoList} handleEdit={handleEdit} handleDelete={handleDelete} />
      </div>
    </div>
  )
}

export default App
