import React from "react"
import BackgroundImage from 'gatsby-background-image'
import { StaticQuery, graphql } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"
import ContactForm from "../components/contactform"

const Contact = () => (
  <StaticQuery
    query={graphql`
      query {
        background: file(relativePath: { eq: "fog.jpg" }) {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <Layout>
        <SEO title="Contact" />
        <BackgroundImage
          fluid={data.background.childImageSharp.fluid}
          className="jumbotron"
          loading="eager"
        >
          <p className="banner">Contact</p>
        </BackgroundImage>
        <div className="content">
          <div className="content-interior">
            <ContactForm />
          </div>
        </div>
      </Layout>
    )}
  />
);

export default Contact
