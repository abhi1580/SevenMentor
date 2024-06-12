import React from "react";
import FlowerItem from "./FlowerItem";

const flowers = [
  "Rose",
  "Lotus",
  "Lily",
  "Jasmin",
  "Jarbera",
  "Chafa",
  "Lasun",
];
const FlowerList = () => {
  const flowerListItem = flowers.map((f) => <FlowerItem key={f} flower={f} />);

  //filtering the flowers which starts with letter 'L'  and storing filtered flowers into lLetterFlower
  const lLetterFlower = flowers.filter((f) => f.startsWith("L"));

  //Passing the lLetterFlower array elements to FlowerItem component through props by using  map method also providing key for unique identification of each component render
  const lLetterFlowerList = lLetterFlower.map((flowerEle) => (
    <FlowerItem key={flowerEle} flower={flowerEle} />
  ));
  return (
    <div>
      <ol>{flowerListItem}</ol>
      <ol>{lLetterFlowerList}</ol>
    </div>
  );
};

export default FlowerList;
