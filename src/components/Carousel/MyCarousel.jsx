import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Store from "../../assets/store.png";
import Work from "../../assets/work_troy.png";
import Work2 from "../../assets/moe_orlando.JPG";
import "../../components/Carousel/MyCarousel.css"

function MyCarousel() {
  return (
    <div id="home">
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            id="Picture1"
            className="d-block w-100"
            style={{ width: "100%", height: "100%" }}
            src={Store}
            alt="BJE Dundee"
          />
          <Carousel.Caption>
            <h3>Beef Jerky Outlet Dundee</h3>
            <p>Our Store in Dundee, MI</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            id="Picture2"
            className="d-block w-100"
            style={{ width: "100%", height: "100%" }}
            src={Work}
            alt="Work"
          />
          <Carousel.Caption>
            <h3>At Work</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            id="Picture3"
            className="d-block w-100"
            style={{ width: "100%", height: "100%" }}
            src={Work2}
            alt="Orlando"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default MyCarousel;
