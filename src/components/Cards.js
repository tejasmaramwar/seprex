import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import { Link } from "react-router-dom";


export default function Cards({ product }) {


  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Link to={`/products/${product.id}`} style={{ textDecoration: 'none' }}>
      <Card
        className="cardborder mb-5"
        style={{
          width: "100%",
          border: "1px solid rgba(0,0,0,.2)",
          overflow: 'hidden',
          height: "25em",
          borderRadius: 3,
          transition: "all .1s linear",
          textDecoration: "none",
          backgroundColor: "#cecece",
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          boxShadow: "rgba(0, 0, 0, 0.56) 0px 22px 70px 4px"

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
            src={product.imageSrc}
            alt={product.name}
            style={{
              width: "100%",
              height:"25em",
              objectFit: "cover",
              transition: "transform 0.5s",
              transform: isHovered ? "scale(1.1)" : "scale(1)",
            }}
          />
        </div>
        <Card.Body
          style={{
            backgroundColor: "rgb(13 131 221)",
            color: "#fff",
            padding: "10px",
            transition: "transform 0.5s",
            transform: isHovered ? "translateY(0)" : "translateY(100%)",
            position: "absolute",
            bottom: 0,
            width: "100%",
          }}
        >
          <Card.Title>{product.name}</Card.Title>
        </Card.Body>
      </Card>
    </Link >
  );
}
