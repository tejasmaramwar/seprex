import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import React, { Component } from "react";
import OwlCarousel from "react-owl-carousel";
import "./css/OurCustomer.css";
export default class OurCustomer extends Component {
  render() {
    return (
      <div className="padding_to_section">
        <h1 className="text-center">Our Clients</h1>
        <div className="logos">
          <div className="logos-slide">
            <img src="/images/clients/alkyl.png" alt=""/>
            <img src="/images/clients/biopharmax.png" alt=""/>
            <img src="/images/clients/dedietrich.png" alt=""/>
            <img src="/images/clients/deepaknitrite.png" alt=""/>
            <img src="/images/clients/gennova.png" alt=""/>
            <img src="/images/clients/hikal.jpeg" alt=""/>
            <img src="/images/clients/iioroorkee.jpeg" alt=""/>
            <img src="/images/clients/ipca.png" alt=""/>
            <img src="/images/clients/laxmiorganic.jpeg" alt=""/>
            <img src="/images/clients/prasol.jpg" alt=""/>
            <img src="/images/clients/rallis.png" alt=""/>
            <img src="/images/clients/reliance.png" alt=""/>
          </div>
        </div>
        {/* <OwlCarousel className='owl-theme padding_to_header ' loop margin={10} nav>
    <div class='item'>
        <h4>1</h4>
          </div>
          <div class='item'>
        <h4>2</h4>
          </div>
          <div class='item'>
        <h4>3</h4>
          </div>
          <div class='item'>
        <h4>4</h4>
          </div>
          </OwlCarousel> */}
      </div>
    );
  }
}
