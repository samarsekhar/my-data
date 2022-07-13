import React from "react";

const TodoList = ({ todos, handleDelete, handleEdit}) => {

  return (
    <div>
        <ul className="allTodos">
            {todos.map((task)=> (
                <li className="singleTodo">
                    <span className="todoText" key={task.id}>
                        {task.todo}
                    </span>
                    <button onClick={() => handleEdit(task.id)}>Edit</button>
                    <button onClick={() => handleDelete(task.id)}>Delete</button>
                </li>
            ))}            
        </ul>  
    </div>
  )
}

export default TodoList;