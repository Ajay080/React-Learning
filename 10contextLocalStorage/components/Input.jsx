import React, {useState} from "react";
import { useTodos } from "../context/TodoContext";

const Input=({todo})=>{
    const {todos, addTodo, removeTodo, updateTodo} = useTodos();
    const [disabled, setDisabled]= React.useState(!todo.completed);
    const [val, updatedVal]= useState(todo.task);

    



    return (
        <div>
            <input
                key={todo.id}
                type="text"
                value={val}
                onChange={(e)=>updatedVal(e.target.value)}
                disabled={disabled}
                placeholder="Add a new task"
            />
            {disabled ? (
                <button onClick={()=>setDisabled(!disabled)}>Edit</button>
            ) : (
                <button onClick={()=>{updateTodo(todo.id, todo.task); setDisabled(!disabled);}}>Save</button>
            )}
            <button onClick={()=>removeTodo(todo.id)}>Delete</button>

        </div>
    )
}

export default Input;