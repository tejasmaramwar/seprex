import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import { Route, Link, BrowserRouter as Router, Routes } from "react-router-dom";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Products from "./Products";
import Services from "./Services";
import Aboutus from "./Aboutus";

export default class NavbarComp extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
              <Navbar.Brand href="/">
                <img
                  alt=""
                  src="/images/weblogo.png"
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                />
                <span style={{ marginRight: 20 }}></span>
                Seprex
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link as={Link} to="/">
                    Home
                  </Nav.Link>
                  <Nav.Link as={Link} to="/products">
                    Products
                  </Nav.Link>
                  <Nav.Link as={Link} to="/services">
                    Services
                  </Nav.Link>
                  <Nav.Link as={Link} to="/aboutus">
                    About Us
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/services" element={<Services />} />
            <Route path="/aboutus" element={<Aboutus />} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}

//NAVBAR DARK
// bg="dark"
// data-bs-theme="dark"
