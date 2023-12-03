import React from "react";
import Container from "react-bootstrap/Container";
import "./css/footer.css";

export default function AppFooter() {
  return (
    <>
      <div className="footerMain">
        <div className="footerLeft">
          <div>
            <h3>
              <span>
                <img src="/images/weblogo.png" alt="" />
              </span>
              SEPREX PVT LTD.
            </h3>
          </div>
          <p>
            Seprex is one-stop Enginering Solution Company setup at Pune India
            by passionate team of engineers.
          </p>
        </div>
        <div className="footerRight"></div>
      </div>
    </>
  );
}
