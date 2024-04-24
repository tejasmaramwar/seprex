// import React, { useState } from "react";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Button from "react-bootstrap/Button";
import "./css/footer.css";

export const Footer = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_nuhvugd', 'template_zh9pm4c', form.current, {
        publicKey: 'CSaReDKk-nZ4I-nz3',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert("Email sent");
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
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
          <p>Seprex a one-stop Engineering Solution Company.</p>
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
        <div>
          <h3>Get in Touch</h3>
        </div>
          <form ref={form} onSubmit={sendEmail}>
            <div className="inputBox">
              <input id='name_id' type="text" placeholder="Full Name" name="user_name" />
            </div>
            <div className="inputBox">
              <input type="email" placeholder="Email" name="user_email" />
            </div>
            <div className="inputBox">
              <input type="phone" placeholder="Phone Number" name="phone" />
            </div>
            <div className="inputTextBox">
              <textarea placeholder="Enquiry Message" name="message" />
            </div>
            <Button type="submit" className="btn submitButton">
              Submit
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}
export default Footer;