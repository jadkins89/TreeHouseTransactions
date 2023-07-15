import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import BackgroundImage from 'gatsby-background-image'

import Layout from "../components/layout"
import SEO from "../components/seo"


const About = () => (
  <StaticQuery
    query={graphql`
      query {
        headshot1: file(relativePath: { eq: "headshot.png" }) {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        background: file(relativePath: { eq: "blue_door.jpg" }) {
          childImageSharp {
            fluid(quality: 30) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        leaf: file(relativePath: { eq: "leaf.png" }) {
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
        <SEO title="About" keywords={[`TreeHouse`, `Transactions`, `Transaction`, `Coordinator`, `California`, `Bay Area`, `Arizona`, `Colorado`, `TC`, `Deena`, `Adkins`]} />
        <BackgroundImage
          fluid={data.background.childImageSharp.fluid}
          className="jumbotron jumbotron-fluid"
        >
          <p className="banner">About</p>
        </BackgroundImage>
        <div className="content">
          <div className="content-interior">
            <h1 className="service-title">Meet the TC</h1>
            <hr style={{margin: `50px`}}/>
            <div className="about-container">
              <div className="about-content">
                <div className="greeting-container">
                  <div id="headshot">
                    <Img fluid={data.leaf.childImageSharp.fluid} />
                  </div>
                  <span id="greeting">
                    *<br/>
                    <strong>Deena Adkins</strong>
                  <br/>Transaction Coordinator
                    <br/>*
                  </span>
                </div>
                <p style={{textAlign: `left`}}>
                  Welcome to Treehouse Transactions, I’m the owner and lead Transaction Coordinator.
                  Coming from a background in Social Work, I was looking for a change and made the leap to become a Licensed Realtor.
                  Working as an Agent was an incredible experience and there are many facets of the job that I loved and excelled at; client services, 
                  networking, and transaction coordination. Fate brought me to the TC business when my husband was relocated for work and I suddenly 
                  needed a mobile job. What began out of desperation has grown into an incredible business. I understand your needs, and can focus on 
                  my undeniable strengths, helping others achieve their goals with my support and assistance. I tend to be a bit of a perfectionist, have 
                  trouble relaxing, and a coffee addiction, but while these traits could be a hindrance, I find they are perfectly suited to this business. 
                  I will make sure everything is taken care of, so you are free to focus on your clients and the next transaction.
                  <br/><br/>
                  When I’m not working, I enjoy travel, hiking, all things outdoors or just hanging at home with my husband,  Border Collie pup, some music and a favorite book.
                </p>
              </div>
            </div>
            <h1 className="service-title">Memberships and Certifications</h1>
            <hr style={{margin: `50px`}}/>
            <div id="certifications">
              <p>Deena Adkins - DRE #01928140</p>
              <p>CAR - Certified Transaction Coordinator</p>
              <p>National Association of Realtors</p>
              <p>California Association of Realtors</p>
              <p>Coldwell Banker Reality - DRE #01908304z</p>
            </div>
            <Link to={'/services'}>
            <div className="nav-button">learn more about my services</div>
          </Link>
          </div>
        </div>
      </Layout>
    )}
  />
);

export default About
