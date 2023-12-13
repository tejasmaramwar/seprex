import React, { Component } from "react";
import "./css/trialfacility.css";
import Trialfacilitycard from "./Trialfacilitycard";

export default class TrialFacility extends Component {
  render() {
    const { image, text, reverse } = this.props;
    return (
      <>
        <div className="trialfacilitycontainer">
          <h1 className="text-center">Trial Facility</h1>
          <div className="trialfacilitycontent">
            <Trialfacilitycard 
            image = "./images/pilotplant.jpg"
            text = "Pilot Scale Fixed Bed Reactor unit - Reactor Volume - 10 ml to 100 ml - Reactor Temperature – Maximum 600 ◦C -	Reactor Pressure – 30 barg - Preheated Temperature- 350 ◦C-	Automation- PID based control panel"
            reverse = {false}
            color="#FFD700"
            />
          </div>
        </div>
      </>
    );
  }
}