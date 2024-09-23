import React from 'react'

function TodoItem({completed, id, title, ToggleTodo, deleteTodo}) {
  return (
    <li className="todo" key={id}>
      <input
        type="checkbox"
        checked={completed}
        onChange={(e) => ToggleTodo(id, e.target.checked)}/>
      <span>{title}</span>
      <button className="delete-todo-button" onClick={() => deleteTodo(id)} >Delete</button>
    </li>
  )
}

export default TodoItem