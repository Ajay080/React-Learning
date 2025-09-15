import { useState } from 'react'
import Card1 from './components/Card'
import './App.css'

function App() {
  const [color, setColor]=useState("bg-red-500")

  return (
    <>
      <div>
        <Card1 backgroundColor={color} />
        <Card1 backgroundColor={color} />
        <Card1 backgroundColor={color} />

        <button onClick={()=>{setColor("bg-red-500")}}>Red</button>
        <button onClick={()=>{setColor("bg-blue-500")}}>Blue</button>
        <button onClick={()=>{setColor("bg-green-500")}}>Green</button> 
      </div>
    </>
  )
}

export default App
