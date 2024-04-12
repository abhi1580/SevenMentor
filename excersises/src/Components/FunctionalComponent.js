import React from 'react'

const FunctionalComponent = (props) => {
    const {id,name}=props;
  return (
    <div>
        <h1>{id}</h1>
        <h1>{name}</h1>
    </div>
  )
}

export default FunctionalComponent