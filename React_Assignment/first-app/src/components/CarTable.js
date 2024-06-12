import React from "react";
import cars from "../database/car_data";
import CarItem from "./CarItem";
const CarTable = () => {
  const carItemRows = cars.map((c) => <CarItem key={c.model} car={c} />);

  //filtering the cars depending on brand of the car  and storing filtered cars into tataCars
  const tataCars = cars.filter((carEle) => carEle.brand === "Tata");

  /* Passing the tatacars array of object element one by one to CarItem component through props by using map method
   also providing key for unique identification of each component render */
  const tataCarsList = tataCars.map((tataCar) => (
    <CarItem key={tataCar.model} car={tataCar} />
  ));
  return (
    <div>
      {" "}
      <table border={"1px"}>
        <thead>
          <tr>
            <th>Car Model</th>
            <th>Car Brand</th>
            <th>Car Price</th>
          </tr>
        </thead>
        <tbody>{carItemRows}</tbody>
      </table>
      <table border={"1px"}>
        <thead>
          <tr>
            <th>Car Model</th>
            <th>Car Brand</th>
            <th>Car Price</th>
          </tr>
        </thead>
        <tbody>{tataCarsList}</tbody>
      </table>
    </div>
  );
};

export default CarTable;
