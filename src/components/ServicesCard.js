import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import { Link } from "react-router-dom";
import "./css/card.css";

export default function ServicesCard({ service }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Link to={`/services/${service.id}`} style={{ textDecoration: "none" }}>
      <Card
        className="cardborder mb-5"
        style={{
          width: "100%",
          border: "1px solid rgba(0,0,0,.2)",
          overflow: "hidden",
          height: "25em",
          borderRadius: 3,
          transition: "all .1s linear",
          textDecoration: "none",
          backgroundColor: "#cecece",
          boxShadow: "rgba(0, 0, 0, 0.56) 0px 22px 70px 4px",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          style={{
            height: "",
            overflow: "hidden",
          }}
        >
          <img
            src={service.image}
            alt={service.name}
            style={{
              width: "100%",
              height: "25em",
              objectFit: "cover",
              transition: "transform 0.5s",
              transform: isHovered ? "scale(1.1)" : "scale(1)",
            }}
          />
        </div>
        <Card.Body className="card-body">
          <Card.Title>{service.name}</Card.Title>
        </Card.Body>
      </Card>
    </Link>
  );
}
