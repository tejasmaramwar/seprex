import React, { Component } from "react";
import "./css/trialfacility.css";
import { Col, Container, Row, ListGroup } from "react-bootstrap";

export default function Trialfacilitycard({
  title,
  image,
  text,
  reverse,
  color,
}) {
  return (
    <>
      <div style={{ backgroundColor: color, padding: "20px" }}>
        <Container>
          <Row>
            {reverse ? (
              <>
                <Col md={6}>
                  <img
                    src={image}
                    alt="Content"
                    style={{ maxWidth: "100%", height: "auto" }}
                  />
                </Col>
                <Col md={6}>
                  <h4>{title}</h4>
                  {/* <p>{text}</p> */}
                  <ListGroup>
                    {text.map((data, index) => (
                      <ListGroup.Item>{data}</ListGroup.Item>
                    ))}
                  </ListGroup>
                </Col>
              </>
            ) : (
              <>
                <Col md={6}>
                  <h4>{title}</h4>
                  {/* <p>{text}</p> */}
                  <ListGroup>
                    {text.map((data, index) => (
                      <ListGroup.Item>{data}</ListGroup.Item>
                    ))}
                  </ListGroup>
                </Col>
                <Col md={6}>
                  <img
                    src={image}
                    alt="Content"
                    style={{ maxWidth: "100%", height: "auto" }}
                  />
                </Col>
              </>
            )}
          </Row>
        </Container>
      </div>
    </>
  );
}
