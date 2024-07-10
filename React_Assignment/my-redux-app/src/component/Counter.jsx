import React from "react";
import { useSelector, useDispatch } from "react-redux";
//importing action creators from redux state slice 
import { increment, decrement } from "../redux/slices/counter/CounterSlice";

const Counter = () => {
    const count=useSelector(state=>state.counter.value)
    const dispatch=useDispatch()
  return <div>
    <button onClick={()=>dispatch(decrement())}>-</button>
    <span>{count}</span>
    <button onClick={()=>dispatch(increment())}>+</button>
  </div>;
};

export default Counter;
