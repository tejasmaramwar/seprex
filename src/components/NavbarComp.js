import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import { Route, Link, BrowserRouter as Router, Routes } from "react-router-dom";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Aboutus from "./Aboutus";
import Home from "./Home";
import Products from "./Products";
import Services from "./Services";
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
          <Navbar expand="lg" className={`fixed-top ${navbarClass}`}>
            <Container>
              <Navbar.Brand href="/">
                <img
                  alt=""
                  src="/images/weblogo.png"
                  width="30"
                  height="30"
                  className="d-inline-block align-top "
                />
                <span style={{ marginRight: 20 }}></span>
                Seprex
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto nav-links">
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
