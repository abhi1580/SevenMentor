import ComponentA from './ComponentA'
import ComponentB from './ComponentB'
import React, { useState } from "react";


const CommonParent = () => {
    const [message, setMessage] = useState("");

    //Event handler
    const handleMessageChange = (e) => {
      setMessage(e.target.value);
    };
  return (
    <div>
        <ComponentA msg={message} onMessage={handleMessageChange}/>
        <ComponentB message={message}/>
    </div>
  )
}

export default CommonParent