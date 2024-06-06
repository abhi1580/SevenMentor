import React from 'react'

const AlertButton = () => {

    const handleClick=()=>{
        alert("Button Clicked");
    }
  return (
    <div>
        <button onClick={handleClick}>Click me!!</button>
    </div>
  )
}

export default AlertButton