import React from "react"

import Layout from "../components/layout"
import Linkbox from "../components/linkbox"
import SEO from "../components/seo"

import { StaticQuery, graphql } from "gatsby"
import BackgroundImage from 'gatsby-background-image'

const IndexPage = () => (
  <StaticQuery
    query={graphql`
      query { 
        index: file(relativePath: { eq: "bay.jpeg" }) {
          childImageSharp {
            fluid(quality: 60) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        about: file(relativePath: { eq: "blue_door.jpg" }) {
          childImageSharp {
            fluid(quality: 20) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        services: file(relativePath: { eq: "sanfran-houses.jpeg" }) {
          childImageSharp {
            fluid(quality: 20) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        reviews: file(relativePath: { eq: "leaves.jpg" }) {
          childImageSharp {
            fluid(quality: 20) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        contact: file(relativePath: { eq: "notebook_flowers.jpg" }) {
          childImageSharp {
            fluid(quality: 20) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <Layout>
        <SEO title="TreeHouse Transactions" keywords={[`Deena`, `Adkins`, `TreeHouse Transactions`, `Transaction Coordinator`]} />
        <BackgroundImage 
          fluid={data.index.childImageSharp.fluid}
          className="jumbotron jumbotron-fluid slide"
          loading="eager"
        >
          <p className="slide-banner">"Until we can manage time, we can manage nothing else" ~ Peter Drucker</p>
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
            <Linkbox title="about" description="Learn about Deena" fluid={data.about.childImageSharp.fluid} />
            <div id="logo-box-small">
              <div id="logo-box">
                <img src={require("../images/treehouse-logo.png")} style={{height: `100%`, padding: `8px`}} alt="Business Logo" />
              </div>
              <Linkbox title="services" description="What we do" fluid={data.services.childImageSharp.fluid} />
            </div>
            <div id="logo-box-regular">
              <Linkbox title="services" description="What we do" fluid={data.services.childImageSharp.fluid} />
              <div id="logo-box">
                <img src={require("../images/treehouse-logo.png")} style={{height: `100%`, padding: `8px`}} alt="Business Logo" />
              </div>
            </div>
            <Linkbox title="reviews" description="You're going to like us" fluid={data.reviews.childImageSharp.fluid} />
            <Linkbox title="contact" description="Get in touch" fluid={data.contact.childImageSharp.fluid} />
          </div>
        </div>
      </Layout>
    )}
  />
);

export default IndexPage
