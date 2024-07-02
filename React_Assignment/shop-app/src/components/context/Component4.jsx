import React from "react";
import { MyContext } from "./Component1";
import { useContext } from "react";

const Component4 = () => {
  //call useContext hook to subscribe to the context and obtain data stored in context
  const message = useContext(MyContext);
  return (
    <div className="border border-2 border-danger rounded m-2 p-2">
      Component4
      <h2>{message}</h2>
    </div>
  );
};

export default Component4;
