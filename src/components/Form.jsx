import React, {useState} from 'react'

function Form({ addTodo }) {
  const [newItem, setNewItem] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newItem === "") return;

    addTodo(newItem);

    setNewItem("");
  };

  return (
    <form className="input-container" onSubmit={handleSubmit}>
      <input
      type="text"
      value={newItem}
      onChange={(e) => setNewItem(e.target.value)} />
      <button className="add-todo-button" type="submit">Add Name</button>
    </form>
    )
}

export default Form