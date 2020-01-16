import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import BackgroundImage from 'gatsby-background-image'

import Layout from "../components/layout"
import SEO from "../components/seo"

const Services = () => (
  <StaticQuery
    query={graphql`
      query {
        background: file(relativePath: { eq: "sanfran-houses.jpeg" }) {
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
        <SEO title="Services" />
        <BackgroundImage
          fluid={data.background.childImageSharp.fluid}
          className="jumbotron"
          loading="eager"
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
                <p>You sign the listing, we do the rest.</p>
              </div>
              <div className="service-item">
                <a className="service-link" href='#sales'>
                  <div>
                    <img className="leaf" src={require('../images/leaf.png')} alt="leaf"/>
                    <h3 className="service-desc-tag">Sales</h3>
                  </div>
                </a>
                <p>Congratulations, you're in contract. We'll manage paperwork and timelines, you negotiate the rest and focus on the client.</p>
              </div>
              <div className="service-item">
                <a className="service-link" href='#gettingStarted'>
                  <div>
                    <img className="leaf" src={require('../images/leaf.png')} alt="leaf"/>
                    <h3 className="service-desc-tag">Getting Started</h3>
                  </div>
                </a>
                <p>Contact us to get setup in our system. Once we have your information you can just forward new listings or contracts and we will take it from there.</p>
              </div>
            </div>
            <h2 id="listings" className="service-content-title">Listing Services</h2>
            <div className="service-content">
              <ul>
                <li>Set up new listing with office and complete any office required paperwork</li>
                <li>Pull evidence of ownership</li>
                <li>Start Pre-Escrow with Title and order Prelim</li>
                <li>Set up file in TC Workflow (software we use to track all details and store files in cloud indefinitely)</li>
                <li>Order HOA documents through title, as needed</li>
                <li>Order NHD report</li>
                <li>Order 3R reports, if required</li>
                <li>Order Sellers Coverage, if requested</li>
                <li>Set up Seller Disclosure Packet in Discloures IO and Docusign</li>
                <li>Send TDS/SPQ and Earthquake report if needed via Glide for easy client completion</li>
                <li>Pull all documents, set up Seller Disclosure Packet, and send out via Docusign or set up for print if you need to sign in person</li>
                <li>Set up Disclosures IO with full Disclosure Packet and provide link you can add to MLS</li>
                <li>Send out Seller Disclosure Packets</li>
                <li>Send our reminders of upcoming listing expiration dates</li>
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
                <li>Maintain complete file in TC Workflow and add all emails at close</li>
                <li>All files stored in cloud indefinitely</li>
              </ul>
              <h2 id="gettingStarted" className="service-content-title">Opening a New Transaction</h2>
              <p>
                Once we have your info in our system, opening a new transaction is easy. Just send us your signed listing agreement or contract, 
                along with title info and client contact info (if not already in zipforms). We will confirm receipt and get everything started 
                that day or depending on time of receipt the next morning at the latest.  Our standard office hours are Monday through Friday 9-5 pm. 
                Closed weekends and Holidays.
              </p>
            </div>
            <Link to={'/contact'}>
              <div className="nav-button">contact us</div>
            </Link>
          </div>
        </div>
      </Layout>
    )}
  />
);

export default Services
