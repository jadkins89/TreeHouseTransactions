import React from "react"
import BackgroundImage from 'gatsby-background-image'
import { StaticQuery, graphql } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"

import ReviewItems from "../components/reviewitems"

const Reviews = () => (
  <StaticQuery
    query={graphql`
      query {
        background: file(relativePath: { eq: "leaves.jpg" }) {
          childImageSharp {
            fluid(quality: 30) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <Layout>
        <SEO title="Reviews" />
        <BackgroundImage
          fluid={data.background.childImageSharp.fluid}
          className="jumbotron"
          loading="eager"
        >
          <p className="banner">Reviews</p>
        </BackgroundImage>
        <div className="content">
          <div className="content-interior">
            <h1 className="service-title">What people are saying...</h1>
            <ReviewItems />
          </div>
        </div>
      </Layout>
    )}
  />
);

export default Reviews
