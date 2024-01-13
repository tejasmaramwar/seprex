import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import Competencies from "./Competencies";
import OurCustomer from "./OurCustomer";
import "./css/home.css";
export default class Home extends Component {

  render() {
    return (
      <>
        <div className="carousel-container">
          <Carousel data-bs-theme="dark">
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/images/carousel/1.jpg"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/images/carousel/2.jpg"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/images/carousel/3.jpg"
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/images/carousel/4.jpg"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/images/carousel/5.jpg"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/images/carousel/6.jpg"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/images/carousel/7.jpg"
              />
            </Carousel.Item>
          </Carousel>
          <div className="homePageTextCard">
            <div className="homePageTextContent">
              <h5>About Us:</h5>
              <p>
              SEPREX was started by a team of passionate engineers committed to reshaping industries through innovative and efficient processes. From concept to implementation, we specialize in delivering tailor-made solutions for a wide variety of application. At SEPREX we design, manufacture and supply process equipment, lab/bench/pilot/demo units and skid-mounted/modular units on turnkey basis conforming to global standards. SEPREX also assists in troubleshooting and process intensification by rigorous experimentation or modeling and simulation. SEPREX has an in-house pilot scale fixed bed, batch, continuous flow reactor and distillation facility where our customers can conduct preliminary testing to understand their systems. We want to be known for quality products and services at the best cost to our customers, explore our digital space to see our commitment to quality, sustainability and tailor-made solutions. Join us in shaping the future of this dynamic sector SEPREX
              </p>
            </div>
          </div>
        </div>
        <Competencies />
        <OurCustomer />
      </>
    );
  }
}
