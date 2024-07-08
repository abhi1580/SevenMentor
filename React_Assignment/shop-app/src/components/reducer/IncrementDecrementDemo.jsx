import { useReducer } from "react";
//globally reducer function

function countReducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "DECREMENT":
      return { ...state, count: state.count - 1 };
    default:
      throw Error("Invalid action type :", action.type);
  }
}
//React Component
const IncrementDecrementDemo = () => {
  const [state, dispatch] = useReducer(countReducer, { count: 0 });

  //event handlers
  const handleIncrement = () => {
    //dispatch action object with type property
    dispatch({ type: "INCREMENT" });
  };
  const handleDecrement = () => {
    //dispatch action object with type property
    dispatch({ type: "DECREMENT" });
  };
  //rendering logic
  return (
    <div>
      <button onClick={handleDecrement}>-</button>
      {state.count}
      <button onClick={handleIncrement}>+</button>
    </div>
  );
};

export default IncrementDecrementDemo;
