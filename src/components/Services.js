import React, { Component } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./css/serviceDetails.css";
import services from "./servicesdata";
import ServicesCard from "./ServicesCard";


export default class Services extends Component {
  render() {
    return (
      <div>
        <div className="services">
        <div className="background-overlay">
            {/* <img
              src="/images/servicesbackground.jpg"
              alt="Background"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            /> */}
          </div>
          <div className="servicescontent">
          <div>
              <Container>
                <Row className="mb-3">
                  <Col lg={12} sm={12} md={12}>
                    <h2 className="text-center pt-3">Our Services</h2>
                  </Col>
                </Row>
                <Row>
                  {services.map((service) => (
                    <Col key={service.id} lg={3} sm={12} md={12}>
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
