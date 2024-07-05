import React from 'react'
import { useRef } from 'react'

const InputFocus = () => {
    const inpuRef=useRef(null)

const handleClick=()=>{
    inpuRef.current.focus() //Manipulating DOM using ref
}
  return (
    <div className='m-2 p-2'>
        <input className='form-control m-2 p-2' type='text' ref={inpuRef} placeholder='Click below button to focus in this textbox'/>
        <button className='btn btn-primary m-2 p-2' onClick={handleClick}>Click to focus</button>
    </div>
  )
}

export default InputFocus