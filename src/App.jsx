import { useEffect, useState } from "react";
import Form from "./components/Form";
import FormList from "./components/FormList";

function App() {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS");
    if (localValue === null) return []
    
    return JSON.parse(localValue)
  });

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos));
  },[todos])

  const addTodo = (title) => {
    setTodos((currentTodos) => {
      return [...currentTodos,{ 
        id: crypto.randomUUID(),
        title,
        completed: false 
      }];
    })
  };

  const ToggleTodo = (id, completed) => {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return {...todo, completed }
        }
        return todo
      })
    })
  };

  const deleteTodo = (id) => {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id)
    })
  };

  return (
    <div className="app">
        <FormList todos={todos} ToggleTodo={ToggleTodo} deleteTodo={deleteTodo}/>
        <Form addTodo={addTodo}/>
    </div>
  );
}

export default App
