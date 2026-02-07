import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm px-4 py-3">
      <NavLink className="navbar-brand fw-bold text-primary" to="/list">
        👨‍💼 Employee Manager
      </NavLink>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto gap-2">
          <li className="nav-item">
            <NavLink
              to="/list"
              className={({ isActive }) =>
                `nav-link px-3 rounded ${
                  isActive ? "bg-primary text-white" : "text-dark"
                }`
              }
            >
              Employee List
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              to="/form"
              className={({ isActive }) =>
                `nav-link px-3 rounded ${
                  isActive ? "bg-primary text-white" : "text-dark"
                }`
              }
            >
              Add Employee
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
