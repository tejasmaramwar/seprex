import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import './css/home.css';
export default class Home extends Component {
  render() {
    return (
      <>
      <div style={{ height: "100vh" }}>
        <Carousel data-bs-theme="dark">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/1.jpg"
              alt="First slide"

            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/2.jpg"
              alt="Second slide"


            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/3.jpg"
              alt="Third slide"


            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/4.jpg"
              alt="First slide"


            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/5.jpg"
              alt="First slide"


            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/6.jpg"
              alt="First slide"


            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/7.jpg"
              alt="First slide"


            />
          </Carousel.Item>
        </Carousel>
        </div>
        </>
    );
  }
}
