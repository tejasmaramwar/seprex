import React, { Component, useEffect, useState } from "react";
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
      <div
        className="paddings innerWidth flexCenter hero-container"
        style={{
          backgroundImage: `url('./images/bgTop.png')`,
          backgroundSize: "30%",
          backgroundPosition: "top right",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* left side */}
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle" />
            <h1>About Us</h1>
            Seprex is started by a team of passionate engineers from renowned
            institutes in India. Seprex started with the objective of
            facilitating the chemical industry in technology transfer,
            troubleshooting and process improvement. Seprex is mainly engaged
            with manufacturing and supply of skid-mounted/modular, semi/fully
            automated Lab/Bench/Pilot/Demo Scale Plants on a turnkey basis at
            par with global standards. Seprex also assists in troubleshooting
            and improvement in production rates, yield, energy efficiency and
            quality by rigorous experimentation/process modeling and
            simulation/advanced process control. Seprex has an in-house pilot
            scale fixed bed/batch / Continuous reactor and distillation
            facility, where our client performs preliminary investigation to
            understand their systems.
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

        <div className="flexCenter hero-right">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            exit={{ opacity: 0 }}
            className="image-container"
          >
            <img src={images[currentImageIndex]} alt="" loading="lazy" />
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
          <Hero />
        </div>
        <div className="competencies-row">
          <Competencies />
        </div>
        <div className="our-customer-row">
          <OurCustomer />
        </div>
      </>
    );
  }
}
