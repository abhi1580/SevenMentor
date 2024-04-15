import React from "react";

export default function ListDemo() {
  const fruits = ["apple", "mango", "banana", "Orange"];

  const res = fruits.map((f, index) => (
    <h2 key={index}>
      {index}
      {f}
    </h2>
  ));
  fruits.splice(1, 1);
  const res1 = fruits.map((f, index) => (
    <h2 key={index}>
      {index}
      {f}
    </h2>
  ));

  return (
    <div>
      {res}
      <br />
      {res1}
      {/* {list1} */}
      <hr />
    </div>
  );
}
