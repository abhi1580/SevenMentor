import React, { useState } from "react";
import cars from "./cars_data";

const CarsGallery = () => {
  const [index, setIndex] = useState(0);
  const [show, setShow] = useState(false);

  const car = cars[index];
  return (
    <div  className="container" style={{textAlign:"center"}}>
      <h2>Car Gallery</h2>
      <h2>
        Showing {index + 1} of {cars.length}
      </h2>
      <h3>
        ******[{car.brand}-{car.model}]******
      </h3>
      <div>
        <img src={car.image} alt={car.model} width={500} height={300} />
      </div>
      <h4>&#8377; {car.price}</h4>
      <button className="btn btn-secondary m-3" onClick={() => setShow(!show)}>
        {show ? "Hide Details" : "Show More"}
      </button>
      {show && (
        <div>
          <table className="table table-secondary tbale-striped">
            <thead>
              <tr className="table-dark">
                <th>Specification </th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Engine CC</th>
                <td>{car.specification.engine}</td>
              </tr>
              <tr>
                <th>Mileage</th>
                <td>{car.specification.mileage}</td>
              </tr>
              <tr>
                <th>Max Torque</th>
                <td>{car.specification.torque}</td>
              </tr>
              <tr>
                <th>Fuel Capacity</th>
                <td>{car.specification.fuelCapacity}</td>
              </tr>
              <tr>
                <th>Horse Power</th>
                <td>{car.specification.horsePower}</td>
              </tr>
              <tr>
                <th>Transmission</th>
                <td>{car.specification.transmission}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
      <div>
        <button
          disabled={index === 0}
          className="btn btn-secondary mx-1"
          onClick={() => setIndex(index - 1)}
        >
          &lt;
        </button>

        <button
          disabled={index === cars.length - 1}
          className="btn btn-secondary mx-1"
          onClick={() => setIndex(index + 1)}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default CarsGallery;
