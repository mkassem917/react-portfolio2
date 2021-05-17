import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./MyNavbar.css";


function MyNavbar() {
    return (
      <Navbar>
        <h2>Mohammad Kassem</h2>
        <Nav className= "animate-navbar nav-theme justify-content-between">
          <Nav.Link className="link" href="#home">
            Home
          </Nav.Link>
    
          <Nav.Link className="link" href="#about">
            About
          </Nav.Link>
    
          <Nav.Link className="link" href="#portfolio">
            Portfolio
          </Nav.Link>
    
          <Nav.Link className="link" href="#contact">
            Contact
          </Nav.Link>
              
        </Nav>
        </Navbar>
      );
    }
  
  export default MyNavbar;
