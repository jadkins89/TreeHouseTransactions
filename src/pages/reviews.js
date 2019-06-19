import React from "react"
import BackgroundImage from 'gatsby-background-image'
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"

import ReviewItems from "../components/reviewitems"

const Reviews = ({ data }) => (
  <Layout>
    <SEO title="Reviews" />
    <BackgroundImage
      fluid={data.background.childImageSharp.fluid}
      className="jumbotron"
      fadeIn="soft"
    >
      <p className="banner">Reviews</p>
    </BackgroundImage>
    <div className="content">
      <div className="content-interior">
        <ReviewItems />
      </div>
    </div>
  </Layout>
)

export const query = graphql`
  query {
    background: file(relativePath: { eq: "forest-3.jpg" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default Reviews
