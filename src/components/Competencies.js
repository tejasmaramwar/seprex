import React from "react";
import "./css/home.css";

const Competencies = () => {
  const data = [
    {
      name: "Technical Knowhow",
      image: "./images/competencies/linkage.png",
    },
    {
      name: "Experienced team",
      image: "./images/competencies/research.png",
    },
    {
      name: "Team which can grasp R&D requirement",
      image: "./images/competencies/team.png",
    },
    {
      name: "Linkage between R&D and Commercial scale",
      image: "./images/competencies/technology.png",
    },
  ];

  return (
    <div id="competencies" className="r-wrapper">
      <div
        className="paddings innerWidth r-container"
        style={{
          backgroundImage: `url('./images/bgMid.png')`,
          backgroundSize: "contain",
          backgroundPosition: "left",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="text-centre text-colour">Core Competencies</div>
        <div className="r-cards">
          <div className="r-row">
            {data.map((card, i) => (
              <div key={i} className="r-card">
                <img src={card.image} alt="home" />
                <span className="cardtext">{card.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Competencies;
