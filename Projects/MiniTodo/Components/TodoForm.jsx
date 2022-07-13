import React from "react";

const TodoForm = ({ handleSubmit, todo, editId, setTodo }) => {
  return (
    <div>
      <form className="todoForm" onSubmit={handleSubmit}>
        <input type="text"
               value={todo}
               onChange={(e)=> setTodo(e.target.value)}
               />
        <button type="submit">{editId ? "Edit" : "Click"}</button>
      </form>
    </div>
  )
}

export default TodoForm;