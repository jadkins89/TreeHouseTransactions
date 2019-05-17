import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ContactForm from "../components/contactform"

const Contact = () => (
  <Layout>
    <SEO title="Contact Page" />
    <div className="jumbotron jumbotron-fluid box-4">
      <p className="banner">Contact</p>
    </div>
    <div className="content">
      <div style={{margin: `0 auto`, width:`70%`}}>
        <ContactForm />
      </div>
    </div>
  </Layout>
)

export default Contact
