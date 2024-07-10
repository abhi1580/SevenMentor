import { useEffect, useState } from "react";

const Timer = () => {
  const [count, setCount] = useState(0);

  //setting timer or delay using useEffect
  useEffect(() => {
    //setup function
    setTimeout(() => {
      setCount(count + 1);
    }, 5000); //update the stae after 1000ms (1 Second)
  }, [count]);
  return (
    <div>
      <h2>{count}</h2>
    </div>
  );
};

export default Timer;
