import React from "react"
import { graphql, Link } from "gatsby"
import BackgroundImage from 'gatsby-background-image'

import Layout from "../components/layout"
import SEO from "../components/seo"

const Services = ({ data }) => (
  <Layout>
    <SEO title="Services" />
    <BackgroundImage
      fluid={data.background.childImageSharp.fluid}
      className="jumbotron"
      fadeIn="soft"
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
            <p>Ea tempor mentitum cernantur, singulis ab quid. Dolor offendit ne relinqueret.</p>
          </div>
          <div className="service-item">
            <a className="service-link" href='#sales'>
              <div>
                <img className="leaf" src={require('../images/leaf.png')} alt="leaf"/>
                <h3 className="service-desc-tag">Sales</h3>
              </div>
            </a>
            <p>Ne legam excepteur cernantur, quid o aliquip e quem ne iudicem.</p>
          </div>
          <div className="service-item">
            <a className="service-link" href='#gettingStarted'>
              <div>
                <img className="leaf" src={require('../images/leaf.png')} alt="leaf"/>
                <h3 className="service-desc-tag">Getting Started</h3>
              </div>
            </a>
            <p>Nam e illum quae export, labore fabulas incurreret, quibusdam aliqua quem incididunt.</p>
          </div>
        </div>
        <h2 id="listings" className="service-content-title">Listing Services</h2>
        <div className="service-content">
          <p>
          Aliquip ipsum iudicem eu do irure offendit. Ita irure dolor quid senserit ea 
          quem ne ad summis voluptate, ut ab multos dolore enim, eu o adipisicing si sed 
          elit ita enim hic irure id ingeniis est dolore ab quis in est aliqua consequat 
          ab ex fabulas adipisicing.
          </p>
          <ul>
            <li>Set up new listing with office / Create list & sale sheet</li>
            <li>Pull evidence of ownership</li>
            <li>Start Pre-Escrow with Title</li>
            <li>Order Prelim and HOA documents as needed</li>
            <li>Order NHD report</li>
            <li>Set up Seller Disclosure Packet in Discloures IO and Docusign</li>
            <li>Send TDS/SPQ etc via Glide for easy client completion</li>
            <li>No more missed boxes or need to scan back</li>
            <li>Order Property inspections, 3R reports, Tank Inspection, and Water and Compliance inspections as requested</li>
            <li>Send out Seller Disclosure Packets</li>
          </ul>
          <h2 id="sales" className="service-content-title">Residential Sales Services</h2>
          <p>
          Cernantur fidelissimae est ullamco, excepteur domesticarum se mandaremus, 
          incurreret eruditionem est deserunt an ut nisi ea eram, se est cillum excepteur 
          ubi nostrud quo eiusmod, quo elit multos quid laborum, appellat imitarentur e 
          iudicem. Litteris fore tempor te cillum. Dolor eruditionem probant irure 
          ullamco, laboris duis fugiat voluptate anim, sed anim te duis est quorum 
          pariatur an comprehenderit se sunt ubi si magna litteris, aliquip velit nescius, 
          te dolore laborum incididunt si nam fore nulla malis ullamco.
          </p>
          <ul>
            <li>Set up transaction in Home Base / Create list & sale sheet</li>
            <li>Set up escrow / Get wire instructions to client / Follow up on deposit</li>
            <li>Send welcome out to all parties with Transaction Timeline and Coversheet</li>
            <li>Coordinate with title, listing agent, and clients for smooth transaction</li>
            <li>Set up disclosures in docusign or print for hand signing</li>
            <li>Ensure all documents are complete and in file</li>
            <li>Follow up on file review notices</li>
            <li>Follow up on Contigency Removal dates</li>
            <li>Maintain complete file in Paperless Pipeline and add all emails at close</li>
            <li>All files stored in cloud for 10 years</li>
            <li>Order Home Warranty</li>
            <li>Order inspections as requested</li>
            <li>Confirm terms with title</li>
          </ul>
          <h2 id="gettingStarted" className="service-content-title">Opening a New Transaction</h2>
          <p>
          Eiusmod hic tempor pariatur, ita quorum vidisse o quamquam quis nescius 
          constias, ne noster dolore se incurreret. Quo fore aut elit. Quo veniam 
          senserit, excepteur irure laborum officia iis nostrud nam quibusdam sed illum 
          aliquip offendit.Et te sint velit velit ex offendit quae doctrina. Veniam 
          commodo imitarentur, illum expetendis vidisse, sint mentitum qui noster dolor, 
          aut se quorum incurreret, legam de quamquam id duis.
          </p>
          <ul>
            <li>Hic de philosophari, nescius duis dolor se nulla.</li>
            <li>Quae singulis se nulla illum nam aliqua incurreret cohaerescant.</li>
            <li>Ex elit expetendis non nam non tamen senserit.</li>
            <li>Voluptate ea quorum non nam legam probant.</li>
            <li>Ex aut praetermissum ex duis comprehenderit senserit nulla commodo.</li>
            <li>Mandaremus domesticarum ut aliquip, mandaremus o ullamco.</li>
            <li>Elit commodo id exquisitaque aut nulla arbitror fidelissimae.</li>
            <li>Mentitum magna quae o nisi o mandaremus ipsum expetendis.</li>
            <li>Excepteur malis laboris incurreret ubi quibusdam te tempor.</li>
            <li>Malis mentitum efflorescere eu eu ut graviterque.</li>
            <li>Mandaremus et aute, quorum probant domesticarum.</li>
          </ul>
        </div>
        <Link to={'/contact'}>
          <div className="nav-button">contact us</div>
        </Link>
      </div>
    </div>
  </Layout>
)

export const query = graphql`
  query {
    background: file(relativePath: { eq: "forest-2.jpg" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default Services
