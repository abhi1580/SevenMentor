import React from "react";
import { Link, Outlet } from "react-router-dom";

const Electronic = () => {
  return (
    <div>
      <h2>Electronic Section</h2>
      <nav className="navbar navbar-expand-lg bg-secondary" data-bs-theme="dark">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link active" to={"mobile"}>Mobile</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={"laptop"}>Laptop</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default Electronic;
