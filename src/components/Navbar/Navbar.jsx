import React from "react";
import { NavLink } from "react-router-dom";
import Nav from 'react-bootstrap/Nav'

function Navbar() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <NavLink to="/" className={window.location.pathname === "/" ? "nav-link" : "nav-link"}>
            Home
            </NavLink
      </nav>
    );
  }
  
  export default Navbar;
