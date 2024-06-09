import React from 'react'

const AlertButton = () => {

    const handleClick=(e)=>{
      e.stopPropagation()// to prevent event from propagating to parent 
        alert(`"You have Clicked" ${e.target}`);
    }
    // const handleOnMouseEnter=()=>{
    //     alert("On Mouse Over alert!!")
    // }
  return (
    <div>
        {/* <button onClick={handleClick}>onClick</button><br/>
        <button onMouseEnter={handleOnMouseEnter}>OnMouseEnter</button><br/> */}

        {/* //Inline event handler */}
        {/* <button onClick={function(){alert("Anonymous function inline event handler")}}>Inline event 1</button><br/>
        <button onClick={()=>{alert("Arrow functon inline event handler")}}>Inline event 2</button><br/> */}
        <button onClick={handleClick}>Inline</button>
    </div>
  )
}

export default AlertButton