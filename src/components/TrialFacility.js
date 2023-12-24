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
          <div className="trialfacilitycontent">
            <Trialfacilitycard
              title="Pilot Scale Fixed Bed Reactor unit"
              image="./images/pilotplant.jpg"
              text={[
                "Reactor Volume - 10 ml to 100 ml",
                "Reactor Temperature - Maximum 600 ◦C",
                "Reactor Pressure - 30 barg",
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
                "Reboiler Volume - 20 liter",
                "Reboiler Temperature - Maximum 300 ◦C",
                "Column Operating Pressure - Full vaccum to 20 barg",
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
                "Reactor Pressure - 10 barg",
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
                "Reactor Pressure - 10 barg",
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
