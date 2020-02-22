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
        index: file(relativePath: { eq: "blossom-plant.jpg" }) {
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
        services: file(relativePath: { eq: "branches.jpg" }) {
          childImageSharp {
            fluid(quality: 20) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        reviews: file(relativePath: { eq: "leaf-flower.jpg" }) {
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
        <SEO keywords={[`TreeHouse Transactions`, `Transaction Coordinator`, `Bay Area`, `TC`, `Deena`, `Adkins`]} />
        <BackgroundImage 
          fluid={data.index.childImageSharp.fluid}
          className="jumbotron jumbotron-fluid slide"
        >
          <p className="slide-banner">"Until we can manage time, we can manage nothing else" ~ Peter Drucker</p>
        </BackgroundImage>
        <div className="content">
          <div className="content-interior">
            <div id="desc-container">
              <div id="desc-box">
                <span>Freedom From the Paperwork</span>
              </div>
              <div id="desc-text">
                <p>
                  Want to take your business to the next level or looking to perfect your work-life balance? 
                  We can help. The average agent spends hours managing documents and transaction timelines, when they 
                  should be focusing on their clients and the next deal. We manage all aspects from listing to closing. 
                  As an integral part of your team we are invested in your success, whether you do a few deals a year or several 
                  a month, we are here for you.
                </p>
              </div>
            </div>
            <hr style={{margin: `50px`}}/>
          </div>
          <div>
            <Linkbox title="about" description="Meet the TC Team" fluid={data.about.childImageSharp.fluid} />
            <div id="logo-box-small">
              <div id="logo-box">
                <img src={require("../images/treehouse-logo.png")} style={{height: `100%`, padding: `8px`}} alt="Business Logo" />
              </div>
              <Linkbox title="services" description="What we can do for you" fluid={data.services.childImageSharp.fluid} />
            </div>
            <div id="logo-box-regular">
              <Linkbox title="services" description="What we can do for you" fluid={data.services.childImageSharp.fluid} />
              <div id="logo-box">
                <img src={require("../images/treehouse-logo.png")} style={{height: `100%`, padding: `8px`}} alt="Business Logo" />
              </div>
            </div>
            <Linkbox title="reviews" description="What our clients have to say" fluid={data.reviews.childImageSharp.fluid} />
            <Linkbox title="contact" description="Lets talk about how we can help" fluid={data.contact.childImageSharp.fluid} />
          </div>
        </div>
      </Layout>
    )}
  />
);

export default IndexPage
