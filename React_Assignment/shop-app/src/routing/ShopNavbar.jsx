import React from "react";
import { Link, Outlet } from "react-router-dom";

const ShopNavbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link active" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/elecs">
              Electronic
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/cloths">
              Clothing
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default ShopNavbar;
