import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Services = () => (
  <Layout>
    <SEO title="Services Page" />
    <div className="jumbotron jumbotron-fluid box-2">
      <p className="banner">Services</p>
    </div>
    <div className="content">
      <div className="content-interior">
        <div className="service-desc">
          <div className="service-item">
            <img className="leaf" src={require('../images/leaf.png')} alt="leaf"/>
            <h3>Listings</h3>
            <p>Ea tempor mentitum cernantur, singulis ab quid. Dolor offendit ne relinqueret, consequat esse constias eu quis cohaerescant proident legam excepteur.</p>
          </div>
          <div className="service-item">
            <img className="leaf" src={require('../images/leaf.png')} alt="leaf"/>
            <h3>Sales</h3>
            <p>Ne legam excepteur cernantur, quid o aliquip e quem ne iudicem exquisitaque ne iudicem, constias sed tempor nescius, est eram enim de cernantur.</p>
          </div>
          <div className="service-item">
            <img className="leaf" src={require('../images/leaf.png')} alt="leaf"/>
            <h3>Getting Started</h3>
            <p>Nam e illum quae export, labore fabulas incurreret, quibusdam aliqua quem incididunt labore dehic singulis praesentibus.</p>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default Services
