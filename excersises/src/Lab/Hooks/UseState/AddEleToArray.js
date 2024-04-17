import React, { useState } from "react";

const AddEleToArray = () => {
  const [arr, setArr] = useState([]);
  const [element, setElement] = useState("");

  const add = () => {
    // Avoid mutating state directly, create a new array instead
    const newArr = [...arr, element];
    setArr(newArr);
    setElement(""); // Clear input field after adding
  };

  return (
    <div>
      <input 
        type="text" 
        value={element} 
        onChange={(event) => setElement(event.target.value)} 
      />
      <button onClick={add}>Add</button>
      <h1>List of fruits:</h1>
      <ol>
        {arr.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ol>
    </div>
  );
};

export default AddEleToArray;
