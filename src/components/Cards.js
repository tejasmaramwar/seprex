import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./css/card.css";
import { Row, Col, Card } from "react-bootstrap";

export default function Cards({ product, reverse }) {
  return (
    <Row className="mb-4">
      {reverse ? (
        <>
          <Col className="productSingleSentenceCol" lg={6} md={12} sm={12}>
            <Card bg="transparent" text="white" className="mb-2">
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.productSingleSentence}</Card.Text>
                <Link className="learnMore" to={`/products/${product.id}`}>
                  <p>
                    Learn More <span className="learnMoreArrow">&gt;</span>
                  </p>
                </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={6} md={12} sm={12}>
            <img
              src={product.image}
              alt={product.name}
              className="img-fluid"
              style={{
                width: "100%",
                height: "25rem",
                objectFit: "fill",
              }}
            />
          </Col>
        </>
      ) : (
        <>
          <Col lg={6} md={12} sm={12}>
            <img
              src={product.image}
              alt={product.name}
              className="img-fluid"
              style={{
                width: "100%",
                height: "25rem",
                objectFit: "fill",
              }}
            />
          </Col>
          <Col className="productSingleSentenceCol" lg={6} md={12} sm={12}>
            <Card bg="transparent" text="white" className="mb-2">
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.productSingleSentence}</Card.Text>
                <Link className="learnMore" to={`/products/${product.id}`}>
                  <p>
                    Learn More <span className="learnMoreArrow">&gt;</span>
                  </p>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        </>
      )}
    </Row>
  );
}
