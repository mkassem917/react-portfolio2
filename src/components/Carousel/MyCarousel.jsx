import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Picture1 from "../../assets/16.jpg";
import Picture2 from "../../assets/3.jpg";
import Picture3 from "../../assets/7.jpg";

function MyCarousel() {
  return (
    <div id="home">
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            id="Picture1"
            className="d-block w-100"
            //style={{ width: "20%", height: "20%" }}
            src={Picture1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            id="Picture2"
            className="d-block w-100"
            //style={{ width: "20%", height: "20%" }}
            src={Picture2}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            id="Picture3"
            className="d-block w-100"
            //style={{ width: "20%", height: "20%" }}
            src={Picture3}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default MyCarousel;
