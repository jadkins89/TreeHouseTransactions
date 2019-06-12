import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import ReviewItems from "../components/reviewitems"

const Reviews = () => (
  <Layout>
    <SEO title="Reviews" />
    <div className="jumbotron jumbotron-fluid box-3">
      <p className="banner">Reviews</p>
    </div>
    <div className="content">
      <div className="content-interior">
        <ReviewItems />
      </div>
    </div>
  </Layout>
)

export default Reviews
