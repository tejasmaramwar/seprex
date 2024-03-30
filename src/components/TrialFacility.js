import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./css/trialfacility.css";

export default class TrialFacility extends Component {
  render() {
    return (
      <>
        <div className="trialfacilitycontainer">
        <h1 className="text-center Heading text-shadow">Trial Facility</h1>
          <p className="trialfacilitydesc">
            Explore our pilot plant facilities, the center of innovation at SEPREX. Equipped with state-of-the-art technology, our pilot plant is a proving ground for cutting-edge chemical process engineering. Witness firsthand the transformational journey from concept to reality, from concept validation to process optimization. See the real impact of our work as we translate ideas into reality in the controlled but dynamic environment of our pilot plant.
          </p>
          <div className="trialfacilitycontent">
            <Container className="custom-container">
              <Row style={{ marginBottom: "100px", marginTop: "40px" }}>
                <Col md={6}>
                  <div className="text-container ">
                    <h4 >Pilot Scale Fixed Bed Reactor unit</h4>
                    <p>
                      Reactor Volume - 10 ml to 100 ml <br />
                      Reactor Temperature - Maximum 600 ◦C <br />
                      Reactor Pressure - 30 bar g <br />
                      Preheated Temperature - 350 ◦C <br />
                      Automation - PID based control panel
                    </p>
                  </div>
                </Col>
                <Col md={6}>
                  <img
                    src="./images/trialfacility/pilotplant3.jpg"
                    alt="Pilot Scale Fixed Bed Reactor unit"
                    style={{ 
                      maxWidth: "100%", 
                      height: "auto", 
                      border: "10px solid #4c4c4c", 
                      borderRadius: "50px",
                      boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.5)" // Adding shadow
                    }}
                    loading="lazy"                  />

                </Col>
              </Row>
            </Container>
            <Container className="custom-container">
            <Row style={{ marginBottom: "100px", marginTop: "40px" }}>
                <Col md={6}>
                  <img
                    src="./images/trialfacility/distillationunit.png"
                    alt="Pilot Scale Distillation unit"
                    style={{ 
                      maxWidth: "100%", 
                      height: "auto", 
                      border: "10px solid #4c4c4c", 
                      borderRadius: "50px",
                      boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.5)" // Adding shadow
                    }}
                    loading="lazy"                  />
                </Col>
                <Col md={6}>
                  <div className="text-container">
                    <h4>Pilot Scale Distillation unit</h4>
                    <p>
                      Mode: Batch as well as continuous <br />
                      Reboiler Volume - 20 litre <br />
                      Reboiler Temperature - Maximum 300 ◦C <br />
                      Column Operating Pressure - Full vacuum to 20 bar g <br />
                      Column Height - 3 meters <br />
                      Automation - PID based control panel
                    </p>
                  </div>
                </Col>
              </Row>
            </Container>
            <Container className="custom-container">
            <Row style={{ marginBottom: "100px", marginTop: "40px" }}>
                <Col md={6}>
                  <div className="text-container">
                    <h4>Pilot Scale Batch Reactor unit</h4>
                    <p>
                      Reactor Volume - 85 liters <br />
                      Reactor Temperature - Maximum 180 ◦C <br />
                      Reactor Pressure - 10 bar g <br />
                      Automation - PID based control panel
                    </p>
                  </div>
                </Col>
                <Col md={6}>
                  <img
                    src="./images/trialfacility/reactor.jpg"
                    alt="Pilot Scale Batch Reactor unit"
                    style={{ 
                      maxWidth: "100%", 
                      height: "auto", 
                      border: "10px solid #4c4c4c", 
                      borderRadius: "50px",
                      boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.5)" // Adding shadow
                    }}
                    loading="lazy"                  />
                </Col>
              </Row>
            </Container>
            <Container className="custom-container">
            <Row style={{ marginBottom: "100px", marginTop: "40px" }}>
                <Col md={6}>
                  <img
                    src="./images/trialfacility/flowunit.png"
                    alt="Pilot Scale Continuous Flow Reactor unit"
                    style={{ 
                      maxWidth: "100%", 
                      height: "auto", 
                      border: "10px solid #4c4c4c", 
                      borderRadius: "50px",
                      boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.5)" // Adding shadow
                    }}
                    loading="lazy"                  />
                </Col>
                <Col md={6}>
                  <div className="text-container">
                    <h4>Pilot Scale Continuous Flow Reactor unit</h4>
                    <p>
                      Reactor Volume - 5 liters <br />
                      Reactor Temperature - Maximum 180 ◦C <br />
                      Reactor Pressure - 10 bar g <br />
                      Automation - PID based control panel
                    </p>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </>
    );
  }
}
