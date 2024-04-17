import React, { Component } from "react";
import "./css/OurCustomer.css";
export default class OurCustomer extends Component {
  render() {
    return (
      <div className="padding_to_section">
        <h1 className="text-colour">Clients</h1>
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
      </div>
    );
  }
}
