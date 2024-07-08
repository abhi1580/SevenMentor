import React from "react";
import stationaries from "./stationaries_data";
import StationaryItem from "./StationaryItem";

const StationaryItemList = ({ onAdd }) => {
  const StationaryItems = stationaries.map((item) => (
    <StationaryItem key={item.id} item={item} onSelect={onAdd} />
  ));
  return <div className="row">{StationaryItems}</div>;
};

export default StationaryItemList;
