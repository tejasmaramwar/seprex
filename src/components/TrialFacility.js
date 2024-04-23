import React, { useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./css/trialfacility.css";

export default function TrialFacility() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="trialfacilitycontainer">
        <h1 className="text-center Heading text-shadow">Trial Facility</h1>
        <p className="trialfacilitydesc">
          Explore our pilot plant facilities, the center of innovation at
          SEPREX. Equipped with state-of-the-art technology, our pilot plant is
          a proving ground for cutting-edge chemical process engineering.
          Witness firsthand the transformational journey from concept to
          reality, from concept validation to process optimization. See the real
          impact of our work as we translate ideas into reality in the
          controlled but dynamic environment of our pilot plant.
        </p>
        <div className="trialfacilitycontent">
          <Container>
            <Row>
              <Col lg={6} md={12} sm={12}>
                <Card className="mb-2">
                  <Card.Body>
                    <Card.Title>Pilot Scale Fixed Bed Reactor unit</Card.Title>
                    <ul>
                      <li>Reactor Volume - 10 ml to 100 ml</li>
                      <li>Reactor Temperature - Maximum 600 ◦C</li>
                      <li>Reactor Pressure - 30 bar g</li>
                      <li>Preheated Temperature - 350 ◦C</li>
                      <li>Automation - PID based control panel</li>
                    </ul>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg={6} md={12} sm={12}>
                <img
                  className="trialFacImage"
                  src="./images/trialfacility/FixedBedReactor.jpg"
                  alt="Pilot Scale Fixed Bed Reactor unit"
                  loading="lazy"
                />
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <img
                  className="trialFacImage"
                  src="./images/trialfacility/Distillation.jpg"
                  alt="Pilot Scale Distillation unit"
                  loading="lazy"
                />
              </Col>
              <Col md={6}>
                <Card className="mb-2">
                  <Card.Body>
                    <Card.Title>Pilot Scale Distillation unit</Card.Title>
                    <ul>
                      <li>Mode: Batch as well as continuous</li>
                      <li>Reboiler Volume - 20 litre</li>
                      <li>Reboiler Temperature - Maximum 300 ◦C</li>
                      <li>
                        Column Operating Pressure - Full vacuum to 20 bar g
                      </li>
                      <li>Column Height - 3 meters</li>
                      <li>Automation - PID based control panel</li>
                    </ul>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <Card className="mb-2">
                  <Card.Body>
                    <Card.Title>Pilot Scale Batch Reactor unit</Card.Title>
                    <ul>
                      <li>Reactor Volume - 85 liters</li>
                      <li>Reactor Temperature - Maximum 180 ◦C</li>
                      <li>Reactor Pressure - 10 bar g</li>
                      <li>Automation - PID based control panel</li>
                    </ul>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6}>
                <img
                  className="trialFacImage"
                  src="./images/trialfacility/batchreactor.jpg"
                  alt="Pilot Scale Batch Reactor unit"
                  loading="lazy"
                />
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <img
                  className="trialFacImage"
                  src="./images/trialfacility/continuousFlow.jpg"
                  alt="Pilot Scale Continuous Flow Reactor unit"
                  loading="lazy"
                />
              </Col>
              <Col md={6}>
                <Card className="mb-2">
                  <Card.Body>
                    <Card.Title>
                      Pilot Scale Continuous Flow Reactor unit
                    </Card.Title>
                    <ul>
                      <li>Reactor Volume - 5 liters</li>
                      <li>Reactor Temperature - Maximum 180 ◦C</li>
                      <li>Reactor Pressure - 10 bar g</li>
                      <li>Automation - PID based control panel</li>
                    </ul>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}
