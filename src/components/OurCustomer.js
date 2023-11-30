import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import React, { Component } from "react";
import OwlCarousel from 'react-owl-carousel';
import './css/OurCustomer.css';
export default class OurCustomer extends Component {
  render() {
    return (
      <div className='padding_to_section'>
        <h1 className="text-center">Our Customer</h1>
        <OwlCarousel className='owl-theme padding_to_header ' loop margin={10} nav>
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
          </OwlCarousel>
      </div>
    )
  }
}
