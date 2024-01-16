import React, { useState } from 'react'
// state are immutable
// state are asynchronous 
export default function App() {
    let [counter,setCounter]=useState(10)
    const increment=()=>{
        // 1.
        // setCounter(counter+1)
        // 2.
        // setCounter(++counter)
        // 3.
        // setCounter(counter++)
        // 4.
        // setCounter((prevCounterValue)=>prevCounterValue+1)

        // same function will execute at last one in setcounter(counter+5)
        // same function will execute at last one in setcounter(counter+4)
    }
    const decrement=()=>{
        setCounter(counter-1)
    }
  return (
    <div className='center'>
      <p>Counter:{counter}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  )
}

