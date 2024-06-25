import React from "react";
import { Link,Outlet } from "react-router-dom";

const Clothing = () => {
  return (
    <div>
      <h2>Clothing Section</h2>
      <nav
        className="navbar navbar-expand-lg bg-secondary"
        data-bs-theme="dark"
      >
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link active" to={"male"}>
              Male
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={"female"}>
              Female
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={"kids"}>
              Kids
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default Clothing;
