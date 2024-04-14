import React from "react";
import { useParams } from "react-router-dom";
import services from "./servicesdata";
import {
  Col,
  Container,
  Row,
  Carousel,
  AccordionItem,
  AccordionHeader,
} from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import AccordionBody from "react-bootstrap/esm/AccordionBody";
import "./css/serviceDetails.css";

const ServiceDetails = () => {
  const { serviceId } = useParams();
  const service = services.find((p) => p.id === serviceId);

  if (!service) {
    return (
      <div style={{ marginTop: "100px" }}>
        <h2 className="text-center">Service not found!</h2>
      </div>
    );
  }

  return (
    <div className="service-details-container">
      <div className="product-details-header">
        <h2 className="text-center">
          {service.name}
        </h2>
      </div>
      <div className="service-details-content">
        <div className="serviceDescription">
          <Container>
            <Row className="align-items-center">
              <Col lg={5}>
                <img
                  src={service.image}
                  alt="Content"
                />
              </Col>
              <Col lg={7}>
                <p>{service.description}</p>
              </Col>
            </Row>
          </Container>
        </div>

        {service.hasOwnProperty("secondImage") && (
          <div className="middle-image">
            <img src={service.secondImage} alt="Content" />
          </div>
        )}

        <div className="accordin">
          <Accordion alwaysOpen>
            <AccordionItem>
              <AccordionHeader className="d-flex justify-content-center">
                {service.serviceheading}
              </AccordionHeader>
              <AccordionBody>
                <ul>
                  {service.serviceslist.map((text, index) => (
                    <li key={text}>{text}</li>
                  ))}
                </ul>
              </AccordionBody>
            </AccordionItem>
          </Accordion>
        </div>

        {service.hasOwnProperty("powerofCFDtitle") && (
          <div className="third-part">
            <section className="explorePower">
              <h4 className="text-center" style={{ fontWeight: 600 }}>
                {service.powerofCFDtitle}
              </h4>
              <Carousel
                style={{
                  backgroundColor: "#f0f0f0",
                  width: "70%",
                  margin: "auto",
                }}
              >
                {service.powerofCFDHeadings.map((text, index) => (
                  <Carousel.Item
                    key={index}
                    style={{ backgroundColor: "#ffffff", padding: "80px" }}
                  >
                    <div className="d-flex flex-column align-items-center">
                      <h2 style={{ marginBottom: "50px" }}>{text}</h2>
                      <p style={{ marginLeft: "30px" }}>
                        {service.powerofCFDcontent[index]}
                      </p>
                    </div>
                  </Carousel.Item>
                ))}
              </Carousel>
            </section>
            <section
              className="whychoose"
              style={{
                textAlign: "center",
                marginTop: "20px",
                marginLeft: "100px",
                marginRight: "100px",
              }}
            >
              <h2 style={{ marginBottom: "40px" }}>{service.whychoose}</h2>
              <ul style={{ listStyleType: "none", padding: 0 }}>
                {service.whychooseHeadings.map((text, index) => (
                  <li key={index} style={{ marginBottom: "20px" }}>
                    <strong style={{ marginBottom: "10px" }}>{text}</strong>
                    {service.whychooseContent[index]}
                  </li>
                ))}
              </ul>
            </section>
          </div>
        )}

        {service.hasOwnProperty("elevateTitle") && (
          <div className="third-part">
            <section className="elevate">
              <h4 className="text-center" style={{ fontWeight: 600 }}>
                {service.elevateTitle}
              </h4>
              <Carousel
                style={{
                  backgroundColor: "#f0f0f0",
                  width: "90%",
                  margin: "auto",
                }}
              >
                {service.elevateHeadings.map((text, index) => (
                  <Carousel.Item
                    key={index}
                    style={{ backgroundColor: "#ffffff", padding: "40px" }}
                  >
                    <div className="d-flex flex-column align-items-center">
                      <h2 style={{ marginBottom: "50px" }}>{text}</h2>
                      <p style={{ marginLeft: "60px", marginRight: "30px" }}>
                        {service.elevatecontent[index]}
                      </p>
                    </div>
                  </Carousel.Item>
                ))}
              </Carousel>
            </section>
            <section
              className="whychoose"
              style={{
                textAlign: "center",
                marginTop: "20px",
                marginLeft: "100px",
                marginRight: "100px",
              }}
            >
              <h2 style={{ marginBottom: "40px" }}>{service.whychoose}</h2>
              <ul style={{ listStyleType: "none", padding: 0 }}>
                {service.whychooseHeadings.map((text, index) => (
                  <li key={index} style={{ marginBottom: "20px" }}>
                    <strong style={{ marginBottom: "10px" }}>{text}</strong>
                    {service.whychooseContent[index]}
                  </li>
                ))}
              </ul>
            </section>
            <section className="third-steps">
              <Container>
                <Row className="align-items-center">
                  <Col lg={6} md={12} sm={12}>
                    <h4>
                      A process improvement or troubleshooting assignment
                      involves the following steps:
                    </h4>
                    <ul>
                      <li>Brainstorming and root causes</li>
                      <li>Defining the hypotheses based on initial data</li>
                      <li>
                        Diagnostic different outcomes of proposed hypothesis.
                      </li>
                      <li>
                        Rating the hypothesis based on hazards, cost and time
                      </li>
                    </ul>
                  </Col>
                  <Col
                    lg={6}
                    md={12}
                    sm={12}
                    className="d-flex justify-content-center align-items-center"
                  >
                    <img
                      src={service.thirdImage}
                      alt="Content"
                      style={{ maxWidth: "100%", height: "auto" }}
                    />
                  </Col>
                </Row>
              </Container>
            </section>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceDetails;
