import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../assets/About.css";

function About() {
  return (
    <Container>
      <Row>
        <Col>
          <div id="about">
            <h3>
              My name is Mohammad Kassem, I'm 42 years old, married with 2 young
              boys. I have a Bachelors degree in IT and I currently hold a
              Senior IT Manager position with the Beef Jerky Outlet, Franchise
              INC. Currently studying to become a full stack developer. My
              family owns and operates a Beef Jerky Outlet Franchise in Dundee,
              MI.
            </h3>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
