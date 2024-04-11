import React, { useState } from 'react'

const CounterUsingUseState = () => {
    const[count,setCount]=useState(0);
  return (
    <div>
        <h1>Count is {count}</h1>
        <button onClick={()=>setCount(count+1)}>Increment</button>
    </div>
  )
}

export default CounterUsingUseState