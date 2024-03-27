import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import { Route, Link, BrowserRouter as Router, Routes } from "react-router-dom";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import ProductDetails from "./ProductDetails";
import Products from "./Products";
import ServiceDetails from "./ServiceDetails";
import Services from "./Services";
import TrialFacility from "./TrialFacility";
import "./css/navbar.css";

export default class NavbarComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrolled: false,
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll() {
    const scrollY = window.scrollY;

    if (scrollY > 200 && !this.state.scrolled) {
      this.setState({ scrolled: true });
    } else if (scrollY <= 200 && this.state.scrolled) {
      this.setState({ scrolled: false });
    }
  }
  render() {
    const { scrolled } = this.state;
    const navbarClass = scrolled ? "scrolled-navbar" : "";
    return (
      <BrowserRouter>
        <div>
          <Navbar collapseOnSelect expand="lg" className={`fixed-top ${navbarClass}`}>
            <Container>
              <Navbar.Brand href="/">
                <img
                  alt=""
                  src="/images/weblogo.png"
                  width="55"
                  height="45"
                  className="d-inline-block align-top "
                />
                <span style={{ marginRight: 10 }}></span>
                SEPREX
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto nav-links">
                  <Nav.Link eventKey="1"  as={Link} to="/">
                    Home
                  </Nav.Link>
                  <Nav.Link eventKey="2"  as={Link} to="/products">
                    Products
                  </Nav.Link>
                  <Nav.Link eventKey="2"  as={Link} to="/services">
                    Services
                  </Nav.Link>
                  {/* <Nav.Link as={Link} to="/aboutus">
                    About Us
                  </Nav.Link> */}
                  <Nav.Link eventKey="2"  as={Link} to="/trialfacility">
                    Trial Facility
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
            <Route path="/products/:productId" element={<ProductDetails />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:serviceId" element={<ServiceDetails />} />
            {/* <Route path="/aboutus" element={<Aboutus />} /> */}
            <Route path="/trialfacility" element={<TrialFacility />} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}
