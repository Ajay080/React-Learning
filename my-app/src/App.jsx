import { useState } from 'react'
import Socket from './socket/socket'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <h1>Socket.io Client</h1>
      <Socket/>
    </div>
    </>
  )
}

export default App
