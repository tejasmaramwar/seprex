import React, { Component } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import TableCompo from "./TableCompo";
import { Link } from 'react-router-dom';
import Cards from "./Cards";
import products from "./productData";

export default class Products extends Component {
  render() {
    const table1Data = [
      {
        "Alternate Energy/Gasification": "Upflow/Downflow Gasifier",
        "Catalytic Process": "Catalyst testing unit",
        "Unit Operation": "Distillation",
      },
      {
        "Alternate Energy/Gasification": "Fluidized Bed Reactor",
        "Catalytic Process": "Adiabatic Reactor System",
        "Unit Operation": "Reactive Distillation",
      },
      {
        "Alternate Energy/Gasification": "Moving Bed Reactor",
        "Catalytic Process": "Isothermal Reactor System",
        "Unit Operation": "Super critical extraction",
      },
      {
        "Alternate Energy/Gasification": "Biomass Gasification System",
        "Catalytic Process": "Liquid/Vapor /gas phase Fixed Bed Reactor",
        "Unit Operation": "Pressure swing adsorption",
      },
      {
        "Alternate Energy/Gasification": "Coal Gasification System",
        "Catalytic Process": "Fluidized Bed Reactor",
        "Unit Operation": "Crystallization",
      },
      {
        "Alternate Energy/Gasification": "Heavy Oil Gasification System",
        "Catalytic Process": "Trickle Bed Reactor",
        "Unit Operation": "Evaporator",
      },
      {
        "Alternate Energy/Gasification": "Pet coke Gasification System",
        "Catalytic Process": "Bubble Column",
        "Unit Operation": "Extraction",
      },
      {
        "Alternate Energy/Gasification": "Pyrolysis systems",
        "Catalytic Process": "Pulse Column",
        "Unit Operation": "",
      },
      {
        "Alternate Energy/Gasification": "Coal Liquefaction System ",
        "Catalytic Process": "",
        "Unit Operation": "",
      },
    ];

    const table2Data = [
      {
        "Oil & Gas": "Adsorption/Desorption Adsorbent Evaluation",
        Pharmaceutical: "CSTR",
        Other: "Hydrodynamics Study",
      },
      {
        "Oil & Gas": "Catalytic Cracking",
        Pharmaceutical: "Loop Reactor",
        Other: "Polymerization",
      },
      {
        "Oil & Gas": "Catalytic Dewaxing",
        Pharmaceutical: "Slurry CSTR",
        Other: "Flow reactors",
      },
      {
        "Oil & Gas": "Desulfurization",
        Pharmaceutical: "",
        Other: "Pressure swing adsorption",
      },
      {
        "Oil & Gas": "Hydrotreating",
        Pharmaceutical: "",
        Other: "",
      },
      {
        "Oil & Gas": "Alkylation",
        Pharmaceutical: "",
        Other: "",
      },
    ];
    const imgStyle = {
      width: "100%",
      maxHeight: "250px",
      padding: "12px",
    };

    // const products = [
    //   { id: '1', name: 'Lab/Bench/Pilot Plants ', description: 'Description of Product 1' },
    //   { id: '2', name: 'Product 2', description: 'Description of Product 2' },
    //   { id: '3', name: 'Product 3', description: 'Description of Product 3' },
    // ];
    return (
      <div>
        <div className="products">
          <div className="productstitle">
            <h2>Products</h2>
          </div>
          <div className="productscontent">
            <div className="firstPlant">
              <Container>
                <Row>
                  <Col lg={12} sm={12} md={12}>
                    <h6>Lab/Bench/Pilot Plants</h6>
                    <p style={{ textAlign: "justify" }}>
                      The crucial elements of a good Lab/Bench/Pilot Plants
                      trial is flexibility and safety. The ability to change or
                      add auxiliary equipment/instruments, it is often required
                      to quickly arrive at an optimum solution. Seprex engineers
                      have the experience and expertise to build safe, flexible
                      and adaptable modular/ skid mounted Lab/Bench/Pilot
                      Plants. Experienced technician will perform tests over a
                      range of actual process conditions to ensure that the unit
                      is operating as per clients expectation, while optimizing
                      the process. Our team work with clients from start to
                      understand their objectives, which are used to size,
                      design, build, and operate a pilot plant with appropriate
                      levels of automation and control. Common industries and
                      process applications we work with include:
                    </p>
                  </Col>
                </Row>
                <Row>
                {products.map((product) => (
                  <Col key={product.id} lg={4} sm={12} md={12}>
                    <Cards product={product} />
                  </Col>
                ))}
                </Row>
              </Container>
              <div className="imagesbackground">
                <Container>
                  <Row>
                    <Col lg={4} md={12}>
                      <img
                        alt=""
                        src="/images/pilotplant.jpg"
                        className="d-inline-block align-top"
                        style={imgStyle}
                      />
                    </Col>
                    <Col lg={4} md={12}>
                      <img
                        alt=""
                        src="/images/pilotplant2.jpg"
                        className="d-inline-block align-top"
                        style={imgStyle}
                      />
                    </Col>
                    <Col lg={4} md={12}>
                      <img
                        alt=""
                        src="/images/pilotplant3.jpg"
                        className="d-inline-block align-top"
                        style={imgStyle}
                      />
                    </Col>
                  </Row>
                </Container>
              </div>
              <div style={{ marginTop: 40 }}></div>
              <Container>
                <Row>
                  <Col lg={12} sm={12} md={12}>
                    <h6>Demo/Modular/Skid-Mounted Plants</h6>
                    <p style={{ textAlign: "justify" }}>
                      A client wish to start producing product at significant
                      quantity to begin distribution and build a potential
                      market. This demonstration plant was built to be easily
                      expandable into a full production facility in the future,
                      allowing organic growth for the client.
                    </p>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
