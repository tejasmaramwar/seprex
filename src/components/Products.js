import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Cards from "./Cards";
import products from "./productData";

export default class Products extends Component {
  render() {
    return (
      <div>
        <div className="products">
          <div className="products-title container">
            <h1 className="text-center prodHeading prod-text-shadow">Our Products</h1>
          </div>
          <div className="productscontent">
            <Container>
              {products.map((product) => (
                <Cards
                  product={product}
                  key={product.id}
                  reverse={parseInt(product.id) % 2 === 0 ? true : false}
                />
              ))}
            </Container>
          </div>
        </div>
      </div>
    );
  }
}
