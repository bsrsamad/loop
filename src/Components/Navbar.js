import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      className="navbar navbar-expand-sm bg-dark navbar-light fixed-top"
      text-
    >
      <div className="container">
        <NavLink to="./index.html" className="navbar-brand">
          BSR
        </NavLink>
        <button
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarcollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarcollapse">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <NavLink to="#home-section" className="nav-link">
                Home
              </NavLink>
            </li>
            <li className="nav-item active">
              <NavLink to="#Explore-section" className="nav-link">
                Explore
              </NavLink>
            </li>
            <li className="nav-item active">
              <NavLink to="#Create-section" className="nav-link">
                Create
              </NavLink>
            </li>
            <li className="nav-item active">
              <NavLink to="#Share-section" className="nav-link">
                Share
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
