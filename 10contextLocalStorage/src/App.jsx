import './App.css'
import { useTodos, TodoProvider } from '../context/TodoContext'
import Input from '../components/Input'
import {useState } from 'react';

function App() {
  const {todos, addTodo, removeTodo, updateTodo}= useTodos();
  
  const [todoText, setTodoText] = useState();
  console.log("todos", todos)
  let createToDo = () => {
    addTodo({id: Date.now(), task: todoText, completed: false});
    setTodoText("");
  }
  return (
    <>
      <input className='border-2 border-gray-300 rounded-md p-2' type="text" onChange={(e)=>setTodoText(e.target.value)}  value={todoText} /><button onClick={createToDo}>Add</button>
      {
        todos && todos.map((element)=>(
          <Input todo={element} key={element.id} />
        ))
      }
    </>
  )
}

export default App
