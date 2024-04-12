import React, { useState } from 'react'

const ColorChangeUsingUseState = () => {
    const[newColor,setColor]=useState('')
  return (
    <div>
        <input type='text' onChange={(event)=>setColor(event.target.value)}/>
      
        <h1 style={{color:newColor}}>This text color will be changes as entered in text box above</h1>
    </div>
  )
}

export default ColorChangeUsingUseState