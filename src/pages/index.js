import React from "react"

import Layout from "../components/layout"
import Linkbox from "../components/linkbox"
import SEO from "../components/seo"

import { graphql } from "gatsby"
import BackgroundImage from 'gatsby-background-image'

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="TreeHouse Transactions" keywords={[`Deena`, `Adkins`, `TreeHouse Transactions`, `Transaction Coordinator`]} />
    <BackgroundImage 
      fluid={data.file.childImageSharp.fluid}
      className="jumbotron slide"
      fadeIn="soft"
    >
      <p className="slide-banner">"Wine, cheese, and chocolate are my three main food groups."</p>
    </BackgroundImage>
    <div className="content">
      <div className="content-interior">
        <div id="desc-box">
          <p>Stuff & Things</p>
        </div>
        <div id="desc-text">
          <p>
          Sunt quamquam occaecat, eram eu singulis te nisi. Est occaecat id vidisse, irure
          o hic quem arbitror ea ingeniis dolore voluptate e officia enim fugiat arbitror
          quis et quis in singulis do tempor, vidisse quo tempor voluptate iis o export a
          elit o quid possumus est firmissimum.
          </p>
        </div>
        <hr style={{margin: `50px`}}/>
      </div>
      <div>
        <Linkbox title="about" description="Learn about Deena" className="box-1" />
        <div id="logo-box-small">
          <div id="logo-box">
            <img src={require("../images/treehouse-logo.png")} style={{height: `100%`, padding: `8px`}} alt="Business Logo" />
          </div>
          <Linkbox title="services" description="What we do" className="box-2" />
        </div>
        <div id="logo-box-regular">
          <Linkbox title="services" description="What we do" className="box-2" />
          <div id="logo-box">
            <img src={require("../images/treehouse-logo.png")} style={{height: `100%`, padding: `8px`}} alt="Business Logo" />
          </div>
        </div>
        <Linkbox title="reviews" description="You're going to like us" className="box-3" />
        <Linkbox title="contact" description="Get in touch" className="box-4" />
      </div>
    </div>
  </Layout>
);

export const query = graphql`
  query { 
    file(relativePath: { eq: "yosemite.jpg" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default IndexPage
