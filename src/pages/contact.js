import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Contact = () => (
  <Layout>
    <SEO title="Contact Page" />
    <div className="jumbotron jumbotron-fluid box-4">
      <p className="banner">Contact</p>
    </div>
    <div className="content">
      <h1>Hi from the Contact Page</h1>
      <p>Get in touch!</p>
    </div>
  </Layout>
)

export default Contact
