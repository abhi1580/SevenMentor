import React from "react";
import './StationaryItem.css'; // Make sure to import the CSS file

const StationaryItem = ({ item, onSelect }) => {
  return (
    <div className="col">
      <div className="card" style={{ width: "18rem" }}>
        <img
          src={item.image}
          alt={item.name}
          width="500"
          height="500"
          className="card-img-top"
        />
        <div className="card-body">
          <h4 className="card-title">{item.brand} {item.name}</h4>
          <h4 className="card-price">&#8377;{item.price}</h4>
          <button onClick={() => onSelect(item)} className="btn btn-secondary">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default StationaryItem;
