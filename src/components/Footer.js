import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import "./css/footer.css";

export default function AppFooter() {
  const handleFormSubmit = () => {
    const name = document.getElementById("nameInput").value;
    const email = document.getElementById("emailInput").value;
    const message = document.getElementById("messageInput").value;

    const subject = "Contact Form Submission";
    const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0AMessage: ${message}`;

    const mailtoLink = `mailto:info@seprex.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  };

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
            Seprex a one-stop Enginering Solution Company.
          </p>

          <h6>Address:</h6>
          <p>
            GAT NO. - 1102, Opposite VOSS Automotive India Pvt. Ltd., Urawade
            Road, Pirangut, <br />
            Teh - Mulshi, Dist. Pune, 412115
          </p>

          <table className="footerEmailAndMobile">
            <tbody>
              <tr>
                <td>
                  <h6>Email:</h6>
                </td>
                <td>
                  <h6>Mobile No.</h6>
                </td>
              </tr>
              <tr>
                <td>info@seprex.com</td>
                <td>+91-8668313398</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="footerRight">
          <h3>Get in Touch</h3>
          <InputGroup className="mb-3">
            <Form.Control
              id="nameInput"
              aria-describedby="basic-addon3"
              placeholder="Enter your name"
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <Form.Control
              id="emailInput"
              aria-label="Amount (to the nearest dollar)"
              placeholder="Enter your email"
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <Form.Control id="phoneInput" placeholder="Phone Number..." />
          </InputGroup>
          <InputGroup>
            <Form.Control
              id="messageInput"
              as="textarea"
              aria-label="With textarea"
              placeholder="Message..."
            />
          </InputGroup>
          <Button
            variant="info"
            className="submitButton"
            onClick={handleFormSubmit}
          >
            Submit
          </Button>
        </div>
      </div>
    </>
  );
}
