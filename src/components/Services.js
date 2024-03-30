import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import services from "./servicesdata";
import ServicesCard from "./ServicesCard";

export default class Services extends Component {
  render() {
    return (
      <div>
        <div className="services container">
          <div className="services-title">
            <h1 className="text-center servHeading serv-text-shadow">Our Services</h1>
          </div>
          <div className="servicescontent">
            <div>
              <Container>
                <Row>
                  {services.map((service) => (
                    <Col key={service.id} lg={6} sm={12} md={12}>
                      <ServicesCard service={service} />
                    </Col>
                  ))}
                </Row>
              </Container>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
