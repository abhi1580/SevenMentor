import React from "react";
import Component4 from "./Component4";
// import { MyContext } from "./Component1";

const Component3 = () => {
  return (
    <div className="border border-2 border-info m-2 p-2 rounded">
      Component3
      <Component4 />
{/* //overriding the context
      <MyContext.Provider value={"This is hard coded data from comp 3"}>
        <Component4 />
      </MyContext.Provider> */}
    </div>
  );
};

export default Component3;
