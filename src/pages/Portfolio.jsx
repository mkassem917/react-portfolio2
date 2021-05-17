import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Drinks from "../assets/drinksplease.png";
import Vaxtrax from "../assets/vaxtrax.png";
import Burger from "../assets/Burger.png";
import DayPlanner from "../assets/day-planner.png";
import "../assets/Portfolio.css";

function Portfolio() {
  return (
    <Container>
        <div id="portfolio"></div>
        <div className="m-2">
                            <a  href="https://github.com/mkassem917" target="_blank" rel="noopener noreferrer">
                                <Button variant="outline-success">
                                <i class="fab fa-github"></i>
                                </Button>
                            </a>
                        </div>
      <h1> My Projects </h1>
      <Row>
        <div className="card">
          <Card style={{ width: 20 + "rem" }}>
            <Card.Img variant="top" src={Drinks} />
            <Card.Body>
              <Card.Title>Drinks! Please!</Card.Title>
              <Card.Text>
                The “Drinks, Please” web application is an interactive tool for
                a user to research a drink based on their location. The featured
                drink is presented to the user with an image, ingredients list
                and a set of directions to make the drink.
              </Card.Text>
              <div>
                <a
                  href="https://vshulman25.github.io/drinksplease/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="m-2" variant="outline-primary">
                    Deployed Link
                  </Button>
                </a>
              </div>
            </Card.Body>
          </Card>
        </div>

        <div className="card">
          <Card style={{ width: 20 + "rem" }}>
            <Card.Img variant="top" src={Vaxtrax} />
            <Card.Body>
              <Card.Title>Vaxtrax</Card.Title>
              <Card.Text>
                This app is designed to assist people signing up for their
                COVID-19 vaccine. There is a sign up page for the user to input
                their information, including name, email, state of residence as
                well as verifying their age and if they are an essential worker.
                This information is then stored in a database. After the user is
                signed up, they are taken to a page that displays their state's
                statistics concerning COVID-19. If the user is eligible for the
                vaccine, there will be an embedded map with the closest vaccine
                clinic.
              </Card.Text>
              <div>
                <a
                  href="https://vaccine-app-project2.herokuapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="m-2" variant="outline-primary">
                    Deployed Link
                  </Button>
                </a>
              </div>
            </Card.Body>
          </Card>
        </div>

        <div className="card">
          <Card style={{ width: 20 + "rem" }}>
            <Card.Img variant="top" src={Burger} />
            <Card.Body>
              <Card.Title>Burger Logger</Card.Title>
              <Card.Text>
              The Burger Logger Application is running with MySQL, Node, Express, Handlebars using MVC Design Pattern
              </Card.Text>
              <div>
                <a
                  href="https://burger-app-moe.herokuapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="m-2" variant="outline-primary">
                    Deployed Link
                  </Button>
                </a>
              </div>
            </Card.Body>
          </Card>
        </div>

        <div className="card">
          <Card style={{ width: 20 + "rem" }}>
            <Card.Img variant="top" src={DayPlanner} />
            <Card.Body>
              <Card.Title>Day Planner</Card.Title>
              <Card.Text>
              This application is displaying a standard business day where the
              users will be able to write notes and save them accordingly to thier
              schedule. The color red will be displaying the current hour, the
              green the upcoming hours and the gray the pass hours.
              </Card.Text>
              <div>
                <a
                  href="https://mkassem917.github.io/day-planner/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="m-2" variant="outline-primary">
                    Deployed Link
                  </Button>
                </a>
              </div>
            </Card.Body>
          </Card>
        </div>
      </Row>
    </Container>
  );
}

export default Portfolio;
