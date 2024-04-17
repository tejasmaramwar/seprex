import React from "react";
import { Link } from "react-router-dom";
import "./css/servicesCard.css";
import { Row, Col, Card } from "react-bootstrap";

export default function ServicesCard({ service, reverse }) {
  // const [isHovered, setIsHovered] = useState(false);

  // const handleMouseEnter = () => {
  //   setIsHovered(true);
  // };

  // const handleMouseLeave = () => {
  //   setIsHovered(false);
  // };

  return (
    <Row className="mb-4">
      {reverse ? (
        <>
          <Col className="serviceSingleSentenceCol" lg={6} md={12} sm={12}>
            <Card className="mb-2">
              <Card.Body>
                <Card.Title>{service.name}</Card.Title>
                <Card.Text>{service.serviceSingleSentence}</Card.Text>
                <Link className="learnMore" to={`/services/${service.id}`}>
                  <p>
                    Know More <span className="learnMoreArrow">&gt;</span>
                  </p>
                </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={6} md={12} sm={12}>
            <div className="serviceCardImage">
              <img
                src={service.image}
                alt={service.name}
                className="img-fluid"
              />
            </div>
          </Col>
        </>
      ) : (
        <>
          <Col lg={6} md={12} sm={12}>
            <div className="serviceCardImage">
              <img
                src={service.image}
                alt={service.name}
                className="img-fluid"
              />
            </div>
          </Col>
          <Col className="serviceSingleSentenceCol" lg={6} md={12} sm={12}>
            <Card bg="transparent" text="white" className="mb-2">
              <Card.Body>
                <Card.Title>{service.name}</Card.Title>
                <Card.Text>{service.serviceSingleSentence}</Card.Text>
                <Link className="learnMore" to={`/services/${service.id}`}>
                  <p>
                    Know More <span className="learnMoreArrow">&gt;</span>
                  </p>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        </>
      )}
    </Row>
    // <Link to={`/services/${service.id}`}>
    //   <Card
    //     className="cardborder mb-5 servicesCard"
    //     onMouseEnter={handleMouseEnter}
    //     onMouseLeave={handleMouseLeave}
    //   >
    //     <div>
    //       <img
    //         className="servicesCardImage"
    //         src={service.image}
    //         alt={service.name}
    //         style={{
    //           transform: isHovered ? "scale(1.1)" : "scale(1)",
    //         }}
    //       />
    //     </div>
    //     <Card.Body className="card-body">
    //       <Card.Title>{service.name}</Card.Title>
    //     </Card.Body>
    //   </Card>
    // </Link>
  );
}