import React from "react"

const ContactForm = () => (
  <div className="container-contact100">
    <form
      className="contact100-form"
      name="contact"
      method="POST"
      data-netlify="true"
    >
      <span className="contact100-form-title">
        Contact Us
      </span>

      <div className="wrap-input100 rs1-wrap-input100">
        <span className="label-input100">Your Name</span>
        <input className="input100" type="text" name="name" placeholder="Enter your name" required />
        <span className="focus-input100"></span>
      </div>

      <div className="wrap-input100 rs1-wrap-input100">
        <span className="label-input100">Email</span>
        <input className="input100" type="email" name="email" placeholder="Enter your email addess" required />
        <span className="focus-input100"></span>
      </div>

      <div className="wrap-input100">
        <span className="label-input100">Message</span>
        <textarea className="input100" name="message" placeholder="Your message here..." required></textarea>
        <span className="focus-input100"></span>
      </div>

      <div className="container-contact100-form-btn">
        <button className="contact100-form-btn">
          <span>
            Submit
          </span>
        </button>
      </div>
    </form>
  </div>
)

export default ContactForm
