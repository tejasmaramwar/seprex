import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

export default function Cards() {
  return (
    <div>
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
            <Card.Title>Primary Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
    </div>
  );
}
