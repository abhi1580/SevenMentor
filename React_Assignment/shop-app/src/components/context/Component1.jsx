import React, { useState, createContext } from "react";
import Component2 from "./Component2";

//Globally create vontext object and export it

export const MyContext = createContext();

const Component1 = () => {
  const [message, setMessage] = useState("");
  return (
    <div className="p2 border border-2 p-2 m-2 rounded border-success">
      Component1
      <br />
      <input
        type="text"
        placeholder="Enter your message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <MyContext.Provider value={message}>
        <Component2 />
      </MyContext.Provider>
    </div>
  );
};

export default Component1;
