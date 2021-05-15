import React from 'react'
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";
import "../assets/Contact.css"

function Contact() {
    return (
        <div id="contact">
            <h1 className="pt-3 text-center font-details-b pb-3">
        <i class="far fa-id-card fa-fw"></i> Contact Me
      </h1>
            <Jumbotron className="contact-jumbotron">
                <Row>
                    <Col className="d-flex justify-content-center flex-wrap">
                        <div className="m-2">
                            <a href="mailto: mkassem917@yahoo.com" target="_blank" rel="noopener noreferrer">
                                <Button variant="outline-success">
                                <i class="fas fa-envelope"></i>
                                </Button>
                            </a>
                        </div>
                        <div className="m-2">
                            <a href="https://www.linkedin.com/in/mohammad-kassem-90820515b/" target="_blank" rel="noopener noreferrer">
                                <Button variant="outline-success">
                                <i class="fab fa-linkedin"></i>
                                </Button>
                            </a>
                        </div>
                    </Col>
                </Row>
            </Jumbotron>
        </div>
    )
}

export default Contact
