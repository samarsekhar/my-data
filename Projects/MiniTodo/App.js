import React, { useState } from "react";
import "./App.css";
import TodoForm from "./Components/TodoForm";
import TodoList from "./Components/TodoList";

const App = () => {
    const [todo, setTodo] = useState("");
    const [todos, setTodos] = useState([]);
    const [editId, setEditId] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (editId) {
            const editTodo = todos.find((item) => item.id === editId);
            const updatedTodos = todos.map((task)=>
            task.id === editTodo.id
            ? (task = {id: task.id, todo})
            : {id: task.id, todo: task.todo}
            );
            setTodos(updatedTodos);
            setEditId(0);
            setTodo("");
            return;
        }
        if (todo !== "") {
            setTodos([{ id: `${todo}-${Date.now()}`, todo}, ...todos]);
            setTodo("");
        }
    }

    const handleDelete = (id) => {
        const delTodo = todos.filter((to)=> to.id !== id);
        setTodos([...delTodo]);
    };

    const handleEdit = (id) => {
        const editTodo = todos.find((i) => i.id === id);
        setTodo(editTodo.todo);
        setEditId(id);
    };

  return (
    <div className="App">
      <div className="container">
        <h1>TODO LIST</h1>
        <TodoForm handleSubmit={handleSubmit}
                  todo={todo}
                  editId={editId}
                  setTodo={setTodo}
                  />
        <TodoList todos={todos}
                  handleEdit={handleEdit}
                  handleDelete={handleDelete}
                  />
      </div>
    </div>
  )
}

export default App;
