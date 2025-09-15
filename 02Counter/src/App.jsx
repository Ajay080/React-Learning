import { useState } from 'react'
import './App.css'

function App() {
  let [count, setCount] = useState(0)

  const updateTheCount = () => {
    count++;
  }

  let [sum, setSum]= useState(0);
  const updateTheSum = () => {
    // They will get update on batches
    // setSum(sum + 1);
    // setSum(sum + 1);
    // setSum(sum + 1);
    // setSum(sum + 1);
    // setSum(sum + 1);
    // setSum(sum + 1);
    // setSum(sum + 1);
    // setSum(sum + 1);
    // setSum(sum + 1);


    setSum((prevSum)=> prevSum + 1);
    setSum((prevSum)=> prevSum + 1);
    setSum((prevSum)=> prevSum + 1);
    setSum((prevSum)=> prevSum + 1);

    setSum(sum+1);
    setSum(sum+1);
    setSum(sum+1);
     let test=232;
    setSum(sum+1);
  }

  return (
    <>
      <h1>Counter: {count}</h1>
       <button onClick={() => updateTheCount()}>Increment</button>
      <button onClick={() => setCount(count)}>Update Number</button>


      {/* react send the batch update */}
      <button onClick={()=>{updateTheSum()}}>Update Sum {sum}</button>
    </>
  )
}

export default App
