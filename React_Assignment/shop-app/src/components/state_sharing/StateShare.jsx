import React from "react";
import CommonParent from "./CommonParent";
import FilterableList from "./FilterableList";

const StateShare = () => {
  return (
    <div className="m-3">
      <CommonParent />
      <FilterableList/>
    </div>
  );
};

export default StateShare;
