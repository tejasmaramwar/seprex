import React, { Component, useEffect, useState} from "react";
import Carousel from "react-bootstrap/Carousel";
import Competencies from "./Competencies";
import OurCustomer from "./OurCustomer";
import "./css/home.css";
import { motion } from "framer-motion";


const Hero = () => {
  const images = [
    "./images/carousel/1.jpg",
    "./images/carousel/2.jpg",
    "./images/carousel/3.jpg",
    "./images/carousel/4.jpg",
    "./images/carousel/5.jpg",
    "./images/carousel/6.jpg",
    "./images/carousel/7.jpg",
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); 

    return () => clearInterval(interval);
  }, []); 

  return (
    <section className="hero-wrapper">
    <div className="paddings innerWidth flexCenter hero-container">
      {/* left side */}
      <div className="flexColStart hero-left">
        <div className="hero-title">
          <div className="orange-circle" />
          SEPREX, led by passionate engineers, redefines industries with innovative processes.<br /> We specialize in tailored solutions, from equipment design to troubleshooting, adhering to global standards. 
          <br />Our in-house pilot facility enables comprehensive system testing. <br />Explore our commitment to quality, sustainability, and custom solutions.<br /><br />Join us in shaping the future with SEPREX.
          <motion.h1
            initial={{ y: "20rem", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 2,
              type: "ease-in",
            }}
          />
        </div>
      </div>

      {/* right side */}
      <div className="flexCenter hero-right">
        <motion.div
          initial={{ x: "7rem", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 2,
            type: "ease-in",
          }}
          exit={{ opacity: 0 }}
          className="image-container"
        >
          <img src={images[currentImageIndex]} alt="" />
        </motion.div>
      </div>
    </div>
  </section>
  );
};

export default class Home extends Component {
  render() {
    return (
      <>
        <div className="App">
        <div className="hero-row">
          <Hero />
        </div>
        <div className="competencies-row">
          <Competencies />
        </div>
        <div className="our-customer-row">
          <OurCustomer />
        </div>
      </div>
      </>
    );
  }
}

 {/* <div className="carousel-container">
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
          
        </div> */}