import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import BackgroundImage from 'gatsby-background-image'

import Layout from "../components/layout"
import SEO from "../components/seo"

const Services = () => (
  <StaticQuery
    query={graphql`
      query {
        background: file(relativePath: { eq: "branches.jpg" }) {
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
        <SEO title="Services" keywords={[`TreeHouse Transactions`, `Transaction Coordinator`, `Bay Area`, `TC`, `Deena`, `Adkins`]} />
        <BackgroundImage
          fluid={data.background.childImageSharp.fluid}
          className="jumbotron"
        >
          <p className="banner">Services</p>
        </BackgroundImage>
        <div className="content">
          <div className="content-interior">
            <h1 className="service-title">Transaction Coordinating Services</h1>
            <div className="service-desc">
              <div className="service-item">
                <a className="service-link" href='#listings'>
                  <div>
                    <img className="leaf" src={require('../images/leaf.png')} alt="leaf"/>
                    <h3 className="service-desc-tag">Listings</h3>
                  </div>
                </a>
              </div>
              <div className="service-item">
                <a className="service-link" href='#sales'>
                  <div>
                    <img className="leaf" src={require('../images/leaf.png')} alt="leaf"/>
                    <h3 className="service-desc-tag">Sales</h3>
                  </div>
                </a>
              </div>
              <div className="service-item">
                <a className="service-link" href='#gettingStarted'>
                  <div>
                    <img className="leaf" src={require('../images/leaf.png')} alt="leaf"/>
                    <h3 className="service-desc-tag">Getting Started</h3>
                  </div>
                </a>
              </div>
            </div>
            <h2 id="listings" className="service-content-title">Listing Services</h2>
            <div className="service-content">
              <ul>
                <li>Set up new listing with office and complete any office required paperwork</li>
                <li>Pull evidence of ownership</li>
                <li>Start Pre-Escrow with Title and order Prelim</li>
                <li>Set up and track file in our Advanced TC Management Program</li>
                <li>Store files indefinitely in cloud software for easy future access</li>
                <li>Order HOA documents through title, as needed</li>
                <li>Order NHD report</li>
                <li>Order 3R reports, if required</li>
                <li>Order Sellers Coverage, if requested</li>
                <li>Set up Seller Disclosure Packet in Discloures IO and Docusign</li>
                <li>Send TDS/SPQ and Earthquake report if needed via Glide for easy client completion</li>
                <li>Pull all documents, set up Seller Disclosure Packet, and send out via Docusign or set up for print if you need to sign in person</li>
                <li>Set up Disclosures IO with full Disclosure Packet and provide link you can add to MLS</li>
                <li>Send out seller disclosure packet for you, as requested</li>
                <li>Send out reminders of upcoming listing expiration dates</li>
              </ul>
              <h2 id="sales" className="service-content-title">Residential Sales Services</h2>
              <ul>
                <li>Set up transaction with your office and take care of any office required paperwork</li>
                <li>Set up escrow</li>
                <li>Get wire instructions to the Client and follow up on deposit</li>
                <li>Send welcome out to all parties with Transaction Timeline and Coversheet</li>
                <li>Coordinate with Title, Listing Agent, and Clients for smooth transaction</li>
                <li>Set up disclosures in Docusign or print for hand signing</li>
                <li>Ensure all documents are complete and in file, including anything specific to your office</li>
                <li>Send out weekly file status updates</li>
                <li>Follow up on file review notices</li>
                <li>Order Home Warranty</li>
                <li>Keep track of all Tasks and Contigency Removal dates, sending advance reminders to you</li>
                <li>Confirm terms with title</li>
                <li>Add Closing statement to file and send out at tax time upon request</li>
                <li>Maintain complete file in our TC management program and add all emails at close</li>
                <li>All files stored in cloud software indefinitely</li>
              </ul>
              <h2 id="gettingStarted" className="service-content-title">Opening a New Transaction</h2>
              <p>
                Opening a new transaction is super easy. Just send us your signed listing agreement or contract, 
                along with the title information and client contact information (if not already in zipforms). We will confirm receipt 
                and get everything started, as soon as possible. Normally that means same day, but could be the next 
                morning depending on time of receipt. We look forward to becoming part of your team.
              </p>
            </div>
            <Link to={'/contact'}>
              <div className="nav-button">get in touch</div>
            </Link>
          </div>
        </div>
      </Layout>
    )}
  />
);

export default Services
