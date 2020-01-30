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
        headshot2: file(relativePath: { eq: "bugs.jpeg" }) {
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
        <SEO title="About" />
        <BackgroundImage
          fluid={data.background.childImageSharp.fluid}
          className="jumbotron jumbotron-fluid"
        >
          <p className="banner">About</p>
        </BackgroundImage>
        <div className="content">
          <div className="content-interior">
            <h1 className="service-title">Meet the Team</h1>
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
                  To give you a bit of my background I have a degree in Social Work and am a Licensed Realtor. 
                  I have always had an interest in the business and was ready for a change, so a while back I made the leap and got my license. 
                  Working as a Realtor was an incredible experience and there are many facets of the job that I love and excel at; client services, 
                  networking, transaction coordination, but I have also learned that I am not suited to a sales position.  Fate brought me to the 
                  TC business when my husband was relocated for work and I suddenly needed a mobile job. What began out of desperation has grown 
                  into and incredible business. I understand your needs, and can focus on my undeniable strengths, helping others achieve their 
                  goals with my support and assistance. I tend to be a bit of a perfectionist, have trouble relaxing, and a bit of a coffee addiction, 
                  but while these traits could be a hindrance, I find they are perfectly suited to this business. I will make sure everything is taken 
                  care of, so you are free to focus on your clients and the next transaction.
                  <br/><br/>
                  When I’m not working, you can find me at an SF Giants game, hiking the CA hills, wine tasting, traveling or just hanging out at home 
                  with my husband, 16 year old cat, and favorite book. 
                </p>
              </div>
              <div className="about-content">
                <div className="greeting-container">
                  <div id="headshot">
                    <Img fluid={data.leaf.childImageSharp.fluid} />
                  </div>
                  <h2 id="greeting">
                    *<br/><br/>
                    <strong>Brittani Bailey</strong> 
                    <br/>Assistant Transaction Coordinator
                    <br/><br/>*
                  </h2>
                </div>
                <p style={{textAlign: `left`}}>
                  Brittani's love for Real Estate began during her childhood. As she grew older, she realized 
                  that she should turn that love of Real Estate, into a career. Brittani began working as a Real 
                  Estate Assistant and Transaction Coordinator in early 2014. In 2018, she decided to go through 
                  Real Estate School in Arizona to further her education and better her skills in the Real Estate 
                  industry. Additionally, Brittani is very organized and disciplined when it comes to providing the 
                  best care and ensuring that her clients receive the best standard of customer service.
                  <br/><br/>
                  When Brittani is not working, she loves spending time with her 3 young children and husband. She also loves traveling. 
                </p>
                <br/>
              </div>
            </div>
            <Link to={'/services'}>
              <div className="nav-button">learn more about our services</div>
            </Link>
          </div>
        </div>
      </Layout>
    )}
  />
);

export default About
