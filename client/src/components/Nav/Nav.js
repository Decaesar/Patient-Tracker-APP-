import React from "react";
import {Link} from "react-router-dom";


const Nav = props => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">

  <div>
    <ul className="navbar-nav">
    <li
        className={
          window.location.pathname === "/login"
            ? "nav-item active"
            : "nav-item"
        }
      >
        <Link to="/login" className="nav-link">
          Home 
        </Link>
      </li>
      <li
        className={
          window.location.pathname === "/patient"
            ? "nav-item active"
            : "nav-item"
        }
      >
        <Link to="/patient" className="nav-link">
          Patients
        </Link>
      </li>
      <li
        className={
          window.location.pathname === "/staff"
            ? "nav-item active"
            : "nav-item"
        }
      >
        <Link to="/staff" className="nav-link">
          Staff
        </Link>
      </li>

      <li
        className={
          window.location.pathname === "/booking"
            ? "nav-item active"
            : "nav-item"
        }
      >
        <Link to="/booking" className="nav-link">
          Booking
        </Link>

      </li>
    </ul>
  </div>
</nav>

);

export default Nav;