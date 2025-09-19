import { useContext, createContext, useEffect, useState} from "react";

const TodoContext = createContext();

const useTodos=()=> useContext(TodoContext);

const TodoProvider=({children})=>{
    const [todos, setTodos]=useState([
        // {id: Date.now(),
        // task: "",
        // completed: false}
    ]);

    useEffect(()=>{
        const storedTodos=JSON.parse(localStorage.getItem("todos")) || [];
        setTodos(storedTodos);
    },[]);

    const addTodo=(todo)=>{
        setTodos((prevTodos)=>([...prevTodos, todo]));
        localStorage.setItem("todos", JSON.stringify(todos));
    }

    const removeTodo=(id)=>{
        const updatedTodos=todos.filter((todo)=>todo.id!=id);
        setTodos(updatedTodos);
        localStorage.setItem("todos", JSON.stringify(updatedTodos));
    }

    const updateTodo=(id, updateTask, status)=>{
        if(updateTask!==""){
            const updatedTodos=todos.map((todo)=>
                todo.id===id ? {...todo, task: updateTask} : todo
            );    
            setTodos(updatedTodos);
            localStorage.setItem("todos", JSON.stringify(updatedTodos));      
        }
        else if(status!==""){
            const updatedTodos=todos.map((todo)=>
                todo.id===id ? {...todo, completed: !todo.completed} : todo
            );
            setTodos(updatedTodos);
            localStorage.setItem("todos", JSON.stringify(updatedTodos));
        }
    }

    return (
        <TodoContext.Provider value={{ todos,addTodo, removeTodo, updateTodo }}>
            {children}
        </TodoContext.Provider>
    )
}

export { TodoContext, useTodos, TodoProvider };

