import React from "react";
import AlertButton from "./AlertButton";

const Toolbar = () => {
  // Event handler function in toolbar Component
  const handleToolbarClick = () => {
    alert("You clicked toolbar");
  };
  return (
    <div onClick={handleToolbarClick}>
      <AlertButton />
    </div>
  );
};

export default Toolbar;
