import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export default function Aboutus() {
  return (
    <>
      <div className="aboutus">
        <div className="aboutustitle">
          <h2>Seprex Private Limited</h2>
          <h5 className="aboutustagline">
            Your Partner in Technology Transfer
          </h5>
        </div>
        <div className="aboutuscontent">
          <Container>
            <Row>
              <Col sm={12} md={6}>
                <h6>About Us</h6>
                <p style={{ textAlign: "justify" }}>
                  Seprex is started by a team of passionate engineers from
                  renowned institutes in India. Seprex started with the
                  objective of facilitating the chemical industry in technology
                  transfer, troubleshooting and process improvement. Seprex is
                  mainly engaged with manufacturing and supply of skid-mounted /
                  modular, semi / fully automated Lab / Bench / Pilot / Demo
                  Scale Plants on a turnkey basis at par with global standards.
                  Seprex also assists in troubleshooting and improvement in
                  production rates, yield, energy efficiency and quality by
                  rigorous experimentation / process modeling and
                  simulation/advanced process control. Seprex has an in-house
                  pilot scale fixed bed / batch / Continuous reactor and
                  distillation facility, where our client performs preliminary
                  investigation to understand their systems.
                </p>
              </Col>
              <Col sm={12} md={6}>
                <div className="aboutuscompetencies">
                  <h6>Core Competencies</h6>
                  <ul>
                    <li>Technical Knowhow</li>
                    <li>Experienced team</li>
                    <li>Team which can grasp R&D requirement</li>
                    <li>Linkage between R&D and Commercial scale</li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}

// {/* <section className="aboutus">
//   <div className="aboutusmain">
//     <h2 className="aboutustitle">Seprex Private Limited</h2>
//     <h5 className="aboutustagline">Your Partner in Technology Transfer</h5>
//     <div className="aboutuscontent">
//       <p className="aboutustext" id="aboutustext">
//         Seprex is started by a team of passionate engineers from renowned
//         institutes in India. Seprex started with the objective of facilitating
//         the chemical industry in technology transfer, troubleshooting and
//         process improvement. Seprex is mainly engaged with manufacturing and
//         supply of skid-mounted / modular, semi / fully automated Lab / Bench /
//         Pilot / Demo Scale Plants on a turnkey basis at par with global
//         standards. Seprex also assists in troubleshooting and improvement in
//         production rates, yield, energy efficiency and quality by rigorous
//         experimentation / process modeling and simulation/advanced process
//         control. Seprex has an in-house pilot scale fixed bed / batch /
//         Continuous reactor and distillation facility, where our client performs
//         preliminary investigation to understand their systems.
//       </p>
//       <div className="aboutuscompetencies">
//         <h6>Core Competencies</h6>
//         <ul typeof="circle">
//           <li>Technical Knowhow</li>
//           <li>Experienced team</li>
//           <li>Team which can grasp R&D requirement</li>
//           <li>Linkage between R&D and Commercial scale</li>
//         </ul>
//       </div>
//     </div>
//   </div>
// </section>; */}
