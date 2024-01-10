import { useState } from 'react'
import './App.css'
import { TodoProvider} from './contexts'
import { useEffect } from 'react'

function App() {
  const [todos, setTodos] = useState(0)

  function addTodo(todo) {
    setTodos((prev) => [{id: Date.now(), ...todo}, ...prev])
  }

  const updateTodo = (id, todo)=> {
    setTodos((prev) => prev.map(prevTodo => prevTodo.id === id ? todo : prevTodo))
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter(prevTodo => prevTodo.id !== id))
  }

  const toggleComplete = (id) => {
    setTodos(prev => 
      prev.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo)
    )
  }

  useEffect(()=>{
    const todos = JSON.parse(localStorage.getItem("todos"))
    if (todos && todos.length > 0) setTodos(todos)
  }, [])

  useEffect(() => {
    localStorage.setItem(JSON.stringify(todos))
  }, [todos])

  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
      <h1>Todo App</h1>
    </TodoProvider>
  )
}

export default App
