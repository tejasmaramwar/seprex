import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import { Link } from "react-router-dom";
import "./css/servicesCard.css";

export default function ServicesCard({ service }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Link to={`/services/${service.id}`}>
      <Card
        className="cardborder mb-5 servicesCard"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div>
          <img
            className="servicesCardImage"
            src={service.image}
            alt={service.name}
            style={{
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
