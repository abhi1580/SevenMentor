import React, { useEffect, useState } from "react";

const CounterExample = () => {
  const [counter, setCounter] = useState(10);

  const func = () => {
    setCounter(counter - 1);
  };
  useEffect(() => {
    if (counter > 0) {
      window.setTimeout(func, 1000);
    }
  });
  return (
    <div>
      <h1>Counter Program:</h1>
      <h1>{counter}</h1>
    </div>
  );
};

export default CounterExample;
