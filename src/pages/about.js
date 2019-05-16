import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const About = () => (
  <Layout>
    <SEO title="About Page" />
    <div className="jumbotron jumbotron-fluid box-1">
      <p className="banner">About</p>
    </div>
    <div className="content">
      <h1>Hi from the About Page</h1>
      <p>We all about it!</p>
    </div>
  </Layout>
)

export default About
