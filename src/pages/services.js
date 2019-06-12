import React from "react"

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
        <h1 className="service-title">Transaction Coordinating Services</h1>
        <div className="service-desc">
          <div className="service-item">
            <a className="service-link" href='/services/#listings'>
              <div>
                <img className="leaf" src={require('../images/leaf.png')} alt="leaf"/>
                <h3 className="service-desc-tag">Listings</h3>
              </div>
            </a>
            <p>Ea tempor mentitum cernantur, singulis ab quid. Dolor offendit ne relinqueret.</p>
          </div>
          <div className="service-item">
            <a className="service-link" href='/services/#sales'>
              <div>
                <img className="leaf" src={require('../images/leaf.png')} alt="leaf"/>
                <h3 className="service-desc-tag">Sales</h3>
              </div>
            </a>
            <p>Ne legam excepteur cernantur, quid o aliquip e quem ne iudicem.</p>
          </div>
          <div className="service-item">
            <a className="service-link" href='services/#getting-started'>
              <div>
                <img className="leaf" src={require('../images/leaf.png')} alt="leaf"/>
                <h3 className="service-desc-tag">Getting Started</h3>
              </div>
            </a>
            <p>Nam e illum quae export, labore fabulas incurreret, quibusdam aliqua quem incididunt.</p>
          </div>
        </div>
        <p className="service-content" id="listings">
        Aliquip ipsum iudicem eu do irure offendit. Ita irure dolor quid senserit ea 
        quem ne ad summis voluptate, ut ab multos dolore enim, eu o adipisicing si sed 
        elit ita enim hic irure id ingeniis est dolore ab quis in est aliqua consequat 
        ab ex fabulas adipisicing. Hic commodo non vidisse, quo ex philosophari.O 
        senserit te singulis. Possumus ad fore incididunt, officia sunt minim vidisse 
        summis. Sed tempor nisi ad litteris.
        </p>
        <p className="service-content" id="sales">
        Cernantur fidelissimae est ullamco, excepteur domesticarum se mandaremus, 
        incurreret eruditionem est deserunt an ut nisi ea eram, se est cillum excepteur 
        ubi nostrud quo eiusmod, quo elit multos quid laborum, appellat imitarentur e 
        iudicem. Litteris fore tempor te cillum. Dolor eruditionem probant irure 
        ullamco, laboris duis fugiat voluptate anim, sed anim te duis est quorum 
        pariatur an comprehenderit se sunt ubi si magna litteris, aliquip velit nescius, 
        te dolore laborum incididunt si nam fore nulla malis ullamco. Aute mentitum ita 
        quorum eram.Eu laboris de eiusmod aut ea do export quid illum in iudicem eram 
        cillum do export, velit litteris si ipsum aliqua id pariatur elit ingeniis sed 
        arbitror nisi anim si tamen, cupidatat quo legam doctrina, quo noster ex fore. A 
        fugiat instituendarum, possumus amet quem do quis est cupidatat domesticarum ubi 
        appellat quo iis ea culpa illum duis. Sed malis senserit voluptate.
        </p>
        <p className="service-content" id="getting-started">
        Eiusmod hic tempor pariatur, ita quorum vidisse o quamquam quis nescius 
        constias, ne noster dolore se incurreret. Quo fore aut elit. Quo veniam 
        senserit, excepteur irure laborum officia iis nostrud nam quibusdam sed illum 
        aliquip offendit.Et te sint velit velit ex offendit quae doctrina. Veniam 
        commodo imitarentur, illum expetendis vidisse, sint mentitum qui noster dolor, 
        aut se quorum incurreret, legam de quamquam id duis, ea quem mentitum, veniam 
        deserunt firmissimum, non qui duis tempor anim. Pariatur se excepteur, labore 
        reprehenderit senserit culpa eiusmod aut de elit deserunt cohaerescant se est 
        nulla fore fugiat senserit. A e illum consequat, eiusmod familiaritatem quo 
        mandaremus sed eram possumus ab labore aliqua e nam expetendis eruditionem.
        </p>
      </div>
    </div>
  </Layout>
)

export default Services
