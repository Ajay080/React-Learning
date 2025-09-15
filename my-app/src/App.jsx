import { useState } from 'react'
import Socket from './socket/socket'
import GCS from './socket/groupChatSocket'

// Importing styles
import {FunctionalCall} from './w3-school/functionalCall'

import './App.css'

function App() {
  return (
    <>
    <div>
      {/* <h1>Socket.io Client</h1> */}
      {/* <Socket/> */}
    </div>
    <div>
      {/* <GCS/> */}
    </div>
    <div>
      <FunctionalCall/>
    </div>
    </>
  )
}

export default App
