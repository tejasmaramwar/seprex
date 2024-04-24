import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Button from "react-bootstrap/Button";
import "./css/footer.css";

export const Footer = () => {
  const form = useRef();
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const errors = {};
    const name = form.current.user_name.value;
    const email = form.current.user_email.value;
    const phone = form.current.phone.value;
    const message = form.current.message.value;

    if (!name.trim()) {
      errors.name = "Name is required";
    }
    if (!email.trim()) {
      errors.email = "Email is required";
    }
    if (!phone.trim()) {
      errors.phone = "Phone Number is required";
    }
    if (!message.trim()) {
      errors.message = "Enquiry Message is required";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (validateForm()) {
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
    }
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
              <input type="text" placeholder="Full Name" name="user_name" />
              {errors.name && <span className="error">{errors.name}</span>}
            </div>
            <div className="inputBox">
              <input type="email" placeholder="Email" name="user_email" />
              {errors.email && <span className="error">{errors.email}</span>}
            </div>
            <div className="inputBox">
              <input type="phone" placeholder="Phone Number" name="phone" />
              {errors.phone && <span className="error">{errors.phone}</span>}
            </div>
            <div className="inputTextBox">
              <textarea placeholder="Enquiry Message" name="message" />
              {errors.message && <span className="error">{errors.message}</span>}
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
