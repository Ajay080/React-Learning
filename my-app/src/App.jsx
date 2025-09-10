import { useState } from 'react'
import Socket from './socket/socket'
import GCS from './socket/groupChatSocket'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <h1>Socket.io Client</h1>
      {/* <Socket/> */}
    </div>
    <div>
      <GCS/>
    </div>
    </>
  )
}

export default App
