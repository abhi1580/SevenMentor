import React, { useState } from 'react'

const UseStateForObj = () => {
    const [name,setName]=useState({firstName:'',lastName:''})
  return (
    <div>
        <input type='text' value={name.firstName} onChange={(event)=>setName({...name,firstName:event.target.value})}/>
        <input type='text' value={name.lastName} onChange={(event)=>setName({...name,lastName:event.target.value})}/>

        <h1>First Name : {name.firstName}</h1>
        <h1>Last Name : {name.lastName}</h1>


    </div>
  )
}

export default UseStateForObj