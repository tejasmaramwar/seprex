import React, { Component } from "react";
import "./css/serviceDetails.css";
import services from "./servicesdata";
import ServicesCard from "./ServicesCard";

export default class Services extends Component {
  render() {
    return (
      <div className="services">
        <div className="servicescontent">
          <h1 className="text-center Heading text-shadow">Our Services</h1>
          <div className="services-wrapper">
            <div className="service-column">
              {services.slice(0, 2).map((service) => (
                <ServicesCard key={service.id} service={service} />
              ))}
            </div>
            <div className="service-column">
              {services.slice(2, 4).map((service) => (
                <ServicesCard key={service.id} service={service} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
