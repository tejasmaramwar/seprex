import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import AppFooter from "./components/Footer";
import NavbarComp from "./components/NavbarComp";

function App() {
  return (
    <>
      <nav className="social">
        <ul>
          <li className="gmail"><i className="fa fa-envelope"  aria-hidden="true"></i>&nbsp;<a href="mailto:info@seprex.com">info@seprex.com</a></li>
          <li className="phoneno"><i className="fa fa-phone" aria-hidden="true"></i> &nbsp;  <a href="tel:+919730815510">9730815510</a></li>
        </ul>
      </nav>
      <div className="App">
        <NavbarComp />
        <footer>
          <AppFooter />
        </footer>
      </div>
    </>
  );
}

export default App;
