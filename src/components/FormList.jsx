import React from 'react'
import TodoItem from './TodoItem'

function FormList( {todos, ToggleTodo, deleteTodo} ) {
  return (
    <ul>
      <h1>Todo List</h1>
      {todos.length === 0 && "No todos"}   
      {todos.map((todo) =>  
        <TodoItem {...todo} key={todo.id} ToggleTodo={ToggleTodo} deleteTodo={deleteTodo}/>
      )}
    </ul>
  )
}

export default FormList