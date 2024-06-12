import { React, useState } from "react";

const CountState = () => {
  let [count, setCount] = useState(0);
  let [color, setColor] = useState("pink");
  let [toggleColor, setToggleColor] = useState(false);

  const handleCount = () => {
    setCount(count + 1);
    setToggleColor(!toggleColor);
    let isPinkColor = toggleColor;
    // if (isPinkColor) {
    //   setColor("pink");
    // } else {
    //   setColor("cyan");
    // }
    isPinkColor ? setColor("pink") : setColor("cyan");
  };
  return (
    <div>
      <button style={{ backgroundColor: color }} onClick={handleCount}>
        {count}
      </button>
    </div>
  );
};

export default CountState;
