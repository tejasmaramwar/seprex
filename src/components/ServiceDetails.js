import React from "react";
import { useParams } from "react-router-dom";
import services from "./servicesdata";
import "./css/serviceDetails.css";
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
        <h2 className="text-center">{service.name}</h2>
      </div>
      <div className="service-details-content">
        <div className="first-part">
          <Container>
            <Row>
              <Col lg={6} md={5}>
                <img
                  src={service.image}
                  alt="Content"
                  style={{ maxWidth: "100%", height: "auto" }}
                />
              </Col>
              <Col lg={6} md={7}>
                <p>{service.description}</p>
              </Col>
            </Row>
          </Container>
        </div>

        {service.hasOwnProperty("secondImage") ? (
          <div className="middle-image">
            <img src={service.secondImage} alt="Content" />
          </div>
        ) : undefined}

        <div className="second-part">
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

        {service.hasOwnProperty("powerofCFDtitle") ? (
          <div className="third-part">
            <div>
              <section>
                <h4 className="text-center" style={{ fontWeight: 600 }}>
                  {service.powerofCFDtitle}
                </h4>
                <Carousel
                  style={{
                    backgroundColor: "#f0f0f0",
                    width: "90%",
                    margin: "auto",
                  }}
                >
                  {service.powerofCFDHeadings.map((text, index) => (
                    <Carousel.Item
                      key={index}
                      style={{ backgroundColor: "#ffffff", padding: "20px" }}
                    >
                      <div className="d-flex flex-column align-items-center">
                        <h2>{text}</h2>
                        <p>{service.powerofCFDcontent[index]}</p>
                      </div>
                    </Carousel.Item>
                  ))}
                </Carousel>
              </section>
              <section className="whychoose">
                <h2>{service.whychoose}</h2>
                <ul>
                  {service.whychooseHeadings.map((text, index) => (
                    <li>
                      <strong>{text}</strong>
                      {service.whychooseContent[index]}
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          </div>
        ) : undefined}

        {service.hasOwnProperty("elevateTitle") ? (
          <div className="third-part">
            <div>
              <section>
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
                      style={{ backgroundColor: "#ffffff", padding: "20px" }}
                    >
                      <div className="d-flex flex-column align-items-center">
                        <h2>{text}</h2>
                        <p>{service.elevatecontent[index]}</p>
                      </div>
                    </Carousel.Item>
                  ))}
                </Carousel>
              </section>
              <section className="whychoose">
                <h2>{service.whychoose}</h2>
                <ul>
                  {service.whychooseHeadings.map((text, index) => (
                    <li>
                      <strong>{text}</strong>
                      {service.whychooseContent[index]}
                    </li>
                  ))}
                </ul>
              </section>
              <section className="third-steps">
                <Container>
                  <Row>
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
                    <Col lg={6} md={12} sm={12}>
                      <img src={service.thirdImage} alt="Content" />
                    </Col>
                  </Row>
                </Container>
              </section>
            </div>
          </div>
        ) : undefined}
      </div>
    </div>
  );
};

export default ServiceDetails;
