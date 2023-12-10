import React, { Component } from "react";
import "./css/home.css";

var competenciesData = [
  {
    id: 1,
    image: "/images/competencies/technology.png",
    text: "Technical Knowhow",
    icon: "fas fa-link competency-icon"
  },
  {
    id: 2,
    image: "/images/competencies/team.png",
    text: "Experienced team",
    icon: "fas fa-link competency-icon"
  },
  {
    id: 3,
    image: "/images/competencies/research.png",
    text: "Team which can grasp R&D requirement",
    icon: "fas fa-link competency-icon"
  },
  {
    id: 4,
    image: "/images/competencies/linkage.png",
    text: "Linkage between R&D and Commercial scale",
    icon: "fas fa-link competency-icon"
  },
];

export default class Competencies extends Component {
  render() {
    return (
      <>
        <div className="competenciesContainer">
          <h1 className="text-center">Core Competencies</h1>
          <div className="competenciesContent">
            <div className="competencies">
              {competenciesData.map((comp) => (
                <div key={comp.id} className="competency">
                  <img
                    src={comp.image}
                    alt={comp.text}
                    className="competency-image"
                  />
                  <div className="competency-text">{comp.text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </>
    );
  }
}
