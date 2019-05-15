import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Reviews = () => (
  <Layout>
    <SEO title="Reviews Page" />
    <div className="jumbotron jumbotron-fluid box-3">
      <p className="banner">reviews</p>
    </div>
    <h1>5 Stars for life!</h1>
    <p>PSA: We left out the bad ones.</p>
  </Layout>
)

export default Reviews
