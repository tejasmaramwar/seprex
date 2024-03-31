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
        className="cardborder mb-5"
        style={{
          width: "100%",
          border: "15px solid rgba(0,0,0,.2)",
          overflow: "hidden",
          height: "25em",
          borderRadius: "30px",
          borderColor:"#727272",
          transition: "all .1s linear",
          textDecoration: "none",
          backgroundColor: "#cecece",
          boxShadow: "rgba(0, 0, 0, 0.56) 0px 22px 70px 4px",
        }}
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
          <p
  className="read-more-text"
  style={{
    width:"200px",
    position: "absolute",
    bottom: "300px",
    left: "500px",
    color: "white",
    background: "#727272", 
    padding: "5px 10px", 
    borderRadius: "5px" 
  }}
>
  Read More &gt;&gt;
</p>

        </Card.Body>
      </Card>
    </Link>
  );
}
