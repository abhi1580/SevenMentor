import React, { useEffect, useState } from "react";

const UseEffectHookDemo1 = (props) => {
  const [count, setCount] = useState(0);
  //This component will render each time state change
  // useEffect(()=>{
  //     document.title=`The count is : ${count}`
  // })
  //This component will render only once (Here only heading count chnages, Title of document will set to 0 as its first value)
  // useEffect(()=>{
  //     document.title=`The count is : ${count}`
  // },[])
  //This component will render only when state will be changed
  // useEffect(()=>{
  //     document.title=`The count is : ${count}`
  // },[count])
  //This component will render only when props of the component will be changed
  useEffect(
    () => {
      document.title = `The count is : ${count}`;
      console.log("Props changed");
      //If we are using count inside the useEffect hook then it must be aaded as a parameter.
    },
    [count],
    [props.temp]
  );
  return (
    <div>
      <h1>Value fetched from props : {props.temp}</h1>
      <h1>The count is set to {count}</h1>
      <button onClick={() => setCount(count + 1)}>
        Click here for increment..
      </button>
    </div>
  );
};

export default UseEffectHookDemo1;
