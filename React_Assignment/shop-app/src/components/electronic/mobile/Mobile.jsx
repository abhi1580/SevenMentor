import React from "react";
import { Outlet } from "react-router-dom";

const Mobile = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <Outlet />
      </div>
    </div>
  );
};

export default Mobile;
