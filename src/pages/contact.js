import React from "react"
import BackgroundImage from 'gatsby-background-image'
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"
import ContactForm from "../components/contactform"

const Contact = ({ data }) => (
  <Layout>
    <SEO title="Contact" />
    <BackgroundImage
      fluid={data.background.childImageSharp.fluid}
      className="jumbotron"
      fadeIn="soft"
    >
      <p className="banner">Contact</p>
    </BackgroundImage>
    <div className="content">
      <div className="content-interior">
        <ContactForm />
      </div>
    </div>
  </Layout>
)

export const query = graphql`
  query {
    background: file(relativePath: { eq: "forest-4.jpg" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default Contact
