import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import AppFooter from "./components/Footer";
import NavbarComp from "./components/NavbarComp";

function App() {
  return (
    <>
      <nav class="social">
        <ul>
          <li class="gmail"><i class="fa fa-envelope"  aria-hidden="true"></i>&nbsp;<a href="mailto:info@seprex.com">info@seprex.com</a></li>
          <li class="phoneno"><i class="fa fa-phone" aria-hidden="true"></i> &nbsp;  <a href="tel:+919359429903">9359429903</a></li>
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
