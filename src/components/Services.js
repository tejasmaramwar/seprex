import React, { Component } from "react";
import { Container } from "react-bootstrap";
import services from "./servicesdata";
import ServicesCard from "./ServicesCard";

export default class Services extends Component {
  render() {
    return (
      <div>
        <div className="services">
          <div className="services-title container">
            <h1 className="text-center servHeading serv-text-shadow">
              Services
            </h1>
          </div>
          <div className="servicescontent">
            <div>
              <Container>
                {services.map((service) => (
                  <ServicesCard
                    service={service}
                    key={service.id}
                    reverse={parseInt(service.id) % 2 === 0 ? true : false}
                  />
                ))}
              </Container>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
