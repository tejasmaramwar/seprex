import React, { Component } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import TableCompo from "./TableCompo";
import { Link } from "react-router-dom";
import Cards from "./Cards";
import products from "./productData";

export default class Products extends Component {
  render() {
    return (
      <div>
        <div className="products">
          <div className="background-overlay">
            <img
              src="/images/productsbackground.jpg"
              alt="Background"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
          <div className="productscontent">
            <div className="firstPlant">
              <Container>
                <Row className="mb-3">
                  <Col lg={12} sm={12} md={12}>
                    <h2 className="text-center pt-3">Our Products</h2>
                  </Col>
                </Row>
                <Row>
                  {products.map((product) => (
                    <Col key={product.id} lg={4} sm={12} md={12}>
                      <Cards product={product} />
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
