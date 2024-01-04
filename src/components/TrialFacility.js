import React, { Component } from "react";
import "./css/trialfacility.css";
import Trialfacilitycard from "./Trialfacilitycard";
import ListGroup from "react-bootstrap/ListGroup";

export default class TrialFacility extends Component {
  render() {
    // const { image, text, reverse } = this.props;
    return (
      <>
        <div className="trialfacilitycontainer">
          <h1 className="text-center">Trial Facility</h1>
          <p className="trialfacilitydesc">Explore our pilot plant facilities, the center of innovation at SEPREX. Equipped with state-of-the-art technology, our pilot plant is a proving ground for cutting-edge chemical process engineering. Witness firsthand the transformational journey from concept to reality, from concept validation to process optimization. See the real impact of our work as we translate ideas into reality in the controlled but dynamic environment of our pilot plant.</p>
          <div className="trialfacilitycontent">
            <Trialfacilitycard
              title="Pilot Scale Fixed Bed Reactor unit"
              image="./images/pilotplant.jpg"
              text={[
                "Reactor Volume - 10 ml to 100 ml",
                "Reactor Temperature - Maximum 600 ◦C",
                "Reactor Pressure - 30 bar g",
                "Preheated Temperature - 350 ◦C",
                "Automation - PID based control panel",
              ]}
              reverse={true}
              color="white"
            />
            <Trialfacilitycard
              title="Pilot Scale Distillation unit"
              image="./images/pilotplant.jpg"
              text={[
                "Mode: Batch as well as continuous",
                "Reboiler Volume - 20 litre",
                "Reboiler Temperature - Maximum 300 ◦C",
                "Column Operating Pressure - Full vaccum to 20 bar g",
                "Column Height - 3 meters",
                "Automation - PID based control panel",
              ]}
              reverse={false}
              color="var(--theme-color)"
            />
            <Trialfacilitycard
              title="Pilot Scale Batch Reactor unit"
              image="./images/pilotplant.jpg"
              text={[
                "Reactor Volume - 85 liters",
                "Reactor Temperature - Maximum 180 ◦C",
                "Reactor Pressure - 10 bar g",
                "Automation - PID based control panel",
              ]}
              reverse={true}
              color="white"
            />
            <Trialfacilitycard
              title="Pilot Scale Continuous Flow Reactor unit"
              image="./images/pilotplant.jpg"
              text={[
                "Reactor Volume - 5 liters",
                "Reactor Temperature - Maximum 180 ◦C",
                "Reactor Pressure - 10 bar g",
                "Automation - PID based control panel",
              ]}
              reverse={false}
              color="var(--theme-color)"
            />
          </div>
        </div>
      </>
    );
  }
}
