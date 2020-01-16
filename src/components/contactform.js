import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

FontAwesomeIcon.config = {
  autoAddCss: false,
};

const ContactForm = () => (
  <div className="container-contact100">
    <form className="contact100-form" name="contact" method="POST" data-netlify="true">
      <input type="hidden" name="form-name" value="contact" />
      <span className="contact100-form-title">
        Contact TreeHouse Transactions to find out how we can help you.
      </span>
      <div className="contact-info tagline">
        <p>freedom from the paperwork</p>
      </div>
      <div className="contact-info">
        <a className="content-contact-info" href="mailto:tcteam@treehousetransactions.com">tcteam@treehousetransactions.com</a>
        <a className="content-contact-info-mobile" href="mailto:tcteam@treehousetransactions.com">contact us</a>
        <a className="linkedin-icon" href="https://www.linkedin.com/in/deenaadkins/">
          <FontAwesomeIcon icon={faLinkedinIn} size="1x" />
        </a>
      </div>
      <div className="wrap-input100 rs1-wrap-input100">
        <span className="label-input100">Name *</span>
        <input className="input100" type="text" name="name" required />
        <span className="focus-input100" />
      </div>

      <div className="wrap-input100 rs1-wrap-input100">
        <span className="label-input100">Email Address *</span>
        <input className="input100" type="email" name="email" required />
        <span className="focus-input100" />
      </div>

      <div className="wrap-input100">
        <span className="label-input100">Brokerage *</span>
        <input className="input100" type="text" name="subject" required />
        <span className="focus-input100" />
      </div>

      <div className="wrap-input100">
        <span className="label-input100">Message *</span>
        <textarea className="input100" name="message" required />
        <span className="focus-input100" />
      </div>

      <div className="container-contact100-form-btn">
        <button className="contact100-form-btn">
          <span>Submit</span>
        </button>
      </div>
    </form>
  </div>
);

export default ContactForm
