import React, { Component } from "react";
import "./css/trialfacility.css";

export default function Trialfacilitycard({ image, text, reverse, color }) {
  const sectionStyle = {
    backgroundColor: color || 'transparent',
  };
  return (
    <div className={`section ${reverse ? "reverse" : ""}`} style={sectionStyle}>
      <div className="section-image">
        <img src={image} alt="Section Image" />
      </div>
      <div className="section-text">
        <p>{text}</p>
      </div>
    </div>
  );
}
