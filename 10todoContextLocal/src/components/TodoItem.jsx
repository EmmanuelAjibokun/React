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
    <div
    className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"}`}
    >Todo Item</div>
  )
}