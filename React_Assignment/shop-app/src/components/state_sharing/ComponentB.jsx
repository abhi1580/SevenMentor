import React from 'react'

const ComponentB = ({message}) => {
  return (
    <div className="border rounded p-2 m-2 bg-warning">
        <h2> Message : {message}</h2>
    </div>
  )
}

export default ComponentB