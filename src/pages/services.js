import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Services = () => (
  <Layout>
    <SEO title="Services Page" />
    <div className="jumbotron jumbotron-fluid box-2">
      <p className="banner">Services</p>
    </div>
    <div className="content">
      <div className="content-interior">
        <h1>Hi from the Services Page</h1>
        <p>You know Deena's got you covered.</p>
      </div>
    </div>
  </Layout>
)

export default Services
