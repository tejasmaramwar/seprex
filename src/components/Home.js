import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import OurCustomer from "./OurCustomer";
import "./css/home.css";
import Competencies from "./Competencies";
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
                alt="First slide"
              />
            </Carousel.Item>
          </Carousel>
          <div className="homePageTextCard">
            <div className="homePageTextContent">
              <h5>About Us:</h5>
              <p>
                Seprex is started by a team of passionate engineers from
                renowned institutes in India. Seprex started with the the
                objective of facilitating the chemical industry in technology
                transfer, troubleshooting, and process improvement. Seprex is
                mainly engaged with manufacturing and supply of skid-mounted /
                modular, semi / fully automated Lab / Bench / Pilot / Demo Scale
                Plants on a turnkey basis at par with global standards. Seprex
                also assists in troubleshooting and improvement in production
                rates, yield, energy efficiency, and quality by rigorous
                experimentation/process modeling and simulation/advanced process
                control. Seprex has an in-house pilot scale fixed bed/batch /
                Continuous reactor and distillation facility, where our client
                performs preliminary investigation to understand their systems.
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
