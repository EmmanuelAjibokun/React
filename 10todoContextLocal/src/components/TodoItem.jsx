/* eslint-disable react/prop-types */
import { useState } from "react"
import { useTodo } from "../contexts"


export default function TodoItem({todo}) {
  const [isTodoEditable, setisTodoEditable] = useState(false)
  const [todoMsg, setTodoMsg] = useState(todo.todo)

  const {updateTodo, deleteTodo, toggleComplete} = useTodo()

  const editTodo =()=> {
    updateTodo(todo.id, {...todo, todo: todoMsg})
  }

  const toggleCompleted = () => {
    toggleComplete(todo.id)
  }

  return (
    <div>Todo Item</div>
  )
}