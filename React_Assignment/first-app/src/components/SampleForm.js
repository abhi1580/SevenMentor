import React from "react";

const SampleForm = () => {
  const handleSubmit = () => {
    alert("Form Submitted");
  };
  return (
    <form>
      <input type="text" placeholder="Enter your name" />
      <button onClick={handleSubmit}> Submit</button>
    </form>
  );
};

export default SampleForm;
