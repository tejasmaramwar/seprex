import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { BrowserRouter, Link, Route, Routes, useLocation } from "react-router-dom";
import Home from "./Home";
import ProductDetails from "./ProductDetails";
import Products from "./Products";
import ServiceDetails from "./ServiceDetails";
import Services from "./Services";
import TrialFacility from "./TrialFacility";
import "./css/navbar.css";

class NavbarComp extends Component {
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
    const scrolled = window.scrollY > 10;
    this.setState({ scrolled });
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
                <span id="navDist"></span> 
                SEPREX
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav" >
                <NavbarLinks className="navBarLinks"/>
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
            <Route path="/trialfacility" element={<TrialFacility />} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}

function NavbarLinks() {
  const location = useLocation();

  return (
    <Nav className="me-auto nav-links">
      <Nav.Link as={Link} to="/" className={location.pathname === '/' ? 'active' : ''}>
        Home
      </Nav.Link>
      <Nav.Link as={Link} to="/products" className={location.pathname.startsWith('/products') ? 'active' : ''}>
        Products
      </Nav.Link>
      <Nav.Link as={Link} to="/services" className={location.pathname.startsWith('/services') ? 'active' : ''}>
        Services
      </Nav.Link>
      <Nav.Link as={Link} to="/trialfacility" className={location.pathname === '/trialfacility' ? 'active' : ''}>
        Trial Facility
      </Nav.Link>
    </Nav>
  );
}

export default NavbarComp;
