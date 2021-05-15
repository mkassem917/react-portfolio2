import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import ProfileImage from "../assets/Moe.jpeg";
import "../assets/About.css";

const About = () => {
  return (
    <div id="about">
      <div className="about">
        <h1 className="pt-3 text-center font-details pb-3">
          <i class="fas fa-comment-dots fa-fw"></i> About Me
        </h1>
        <Container>
          <Row className="pt-3 pb-5 align-items-center">
            <Col xs={12} md={6}>
              <Row className="justify-content-center mb-2 mr-2 ">
                <Image
                  className="profile justify-content-end"
                  alt="profile"
                  src={ProfileImage}
                  rounded
                  fluid
                />
              </Row>
            </Col>
            <Col xs={12} md={6}>
              <Row className=" align-items-start p-2 my-details rounded">
                Hello I'm<strong>&nbsp; Mohammad Kassem,</strong>
                I'm a Full Stack Web Developer with focus on React.js, Redux,
                Node.js. I'm a family man with two young boys and my wife.
                <br /> <br />
                I'm currently the Senior IT Manager for the Beef Jerky Outlet
                Franchise, Inc!
                <br /> <br />
                Lastly, My family and I own and operate a Beef Jerky Outlet in
                Dundee, MI.
              </Row>
              <Col className="d-flex justify-content-center flex-wrap pt-5">
                <div>
                  <a
                    href="https://github.com/mkassem917"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="m-2" variant="outline-secondary">
                      Github
                    </Button>
                  </a>
                </div>
                <div>
                  <a
                    href="https://www.linkedin.com/in/mohammad-kassem-90820515b/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="m-2" variant="outline-info">
                      LinkedIn
                    </Button>
                  </a>
                </div>
                <div>
                  <a
                    href="../assets/Mohammad Kassem Resume.pdf"
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="m-2" variant="outline-danger">
                      My Resume
                    </Button>
                  </a>
                </div>
              </Col>
              <Row></Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default About;
