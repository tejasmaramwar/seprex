import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import { Link } from "react-router-dom";

export default function Cards({ product }) {
  return (
    <>
      <Link to={`/products/${product.id}`} style={{ textDecoration: 'none' }}>
        <CardGroup>
          <Card
            className="cardborder"
            style={{
              width: "18rem",
              border: "3px solid #599bcd",
              borderColor: "#599bcd",
              borderRadius: 10,
            }}
          >
            <Card.Header style={{ backgroundColor: "#599bcd" }}>
              Header
            </Card.Header>
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Text>
                {product.description}
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
      </Link>
    </>
  );
}
