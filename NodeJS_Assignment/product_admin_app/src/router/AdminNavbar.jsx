import React from "react";
import { Link, Outlet } from "react-router-dom";

const AdminNavbar = () => {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg bg-secondary"
        data-bs-theme="dark"
      >
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link active" to="/">
              Home
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default AdminNavbar;
