import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./MyNavbar.css";


function MyNavbar() {
    return (
      <Navbar>
        <Nav className= "mr-auto">
          <Nav.Link href="#home">
            Home
          </Nav.Link>
    
          <Nav.Link href="#about">
            About
          </Nav.Link>
    
          <Nav.Link href="#portfolio">
            Portfolio
          </Nav.Link>
    
          <Nav.Link href="#contact">
            Contact
          </Nav.Link>
              
        </Nav>
        </Navbar>
      );
    }
  
  export default MyNavbar;
