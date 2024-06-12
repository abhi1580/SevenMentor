import React from 'react'

const Count = () => {
    let counter=0

    const handleCount=()=>{
        counter =counter+1
        console.log(counter)
    }
  return (
    <div>
        <button onClick={handleCount}>{counter}</button>
    </div>
  )
}

export default Count