import { useState } from 'react'
import Card from './components/Card'
import './App.css'

function App() {
  return (
    <div className="App">
      <h1 className="bg-green-400 p-2 rounded-xl">Hello World</h1>
      <Card name={"CARD 1"} arr={[1,2,3,4]}/>
      <Card name={"CARD 2"} arr={[5,6,7,8]}/>
    </div>
  )
}

export default App
