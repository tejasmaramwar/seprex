// import React, { Component } from "react";
// import "./css/home.css";

// var competenciesData = [
//   {
//     id: 1,
//     image: "/images/competencies/technology.png",
//     text: "Technical Knowhow",
//     icon: "fas fa-link competency-icon"
//   },
//   {
//     id: 2,
//     image: "/images/competencies/team.png",
//     text: "Experienced team",
//     icon: "fas fa-link competency-icon"
//   },
//   {
//     id: 3,
//     image: "/images/competencies/research.png",
//     text: "Team which can grasp R&D requirement",
//     icon: "fas fa-link competency-icon"
//   },
//   {
//     id: 4,
//     image: "/images/competencies/linkage.png",
//     text: "Linkage between R&D and Commercial scale",
//     icon: "fas fa-link competency-icon"
//   },
// ];

// export default class Competencies extends Component {
//   render() {
//     return (
//       <>
//         <div className="competenciesContainer">
//           <h1 className="text-center">Core Competencies</h1>
//           <div className="competenciesContent">
//             <div className="competencies">
//               {competenciesData.map((comp) => (
//                 <div key={comp.id} className="competency">
//                   <img
//                     src={comp.image}
//                     alt={comp.text}
//                     className="competency-image"
//                   />
//                   <div className="competency-text">{comp.text}</div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </>
//     );
//   }
// }
import React from "react";
import "./css/home.css";

const Residencies = () => {
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
    }
  ];

  return (
    <div id="residencies" className="r-wrapper">
      <div className="paddings innerWidth r-container">
        <div className="text-centre text-colour">Core Competencies</div>
        <div className="r-cards">
          {data.map((card, i) => (
            <div key={i} className="r-card">
              <img src={card.image} alt="home" />
              {/* <span className="secondarytext">{card.detail}</span> */}
              <span className="cardtext">{card.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Residencies;
