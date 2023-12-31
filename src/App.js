import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import NavbarComp from "./components/NavbarComp";
import AppFooter from "./components/Footer";

function App() {
  return (
    <>
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
