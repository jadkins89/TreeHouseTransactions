import React from "react"

import Layout from "../components/layout"
import Linkbox from "../components/linkbox"
import Image from "../components/image"
import SEO from "../components/seo"

// Write style to modify size of boxes based on screen size

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div className="jumbotron jumbotron-fluid slide">
      <p className="slide-banner">"Wine, cheese, and chocolate are my three main food groups."</p>
    </div>
    <div className="content">
      <div className="home-description-box">
        <div id="desc-box">
          Stuff & Things
        </div>
        <div id="desc-text">
          <p>
          Sunt quamquam occaecat, eram eu singulis te nisi. Est occaecat id vidisse, irure
          o hic quem arbitror ea ingeniis dolore voluptate e officia enim fugiat arbitror
          quis et quis in singulis do tempor, vidisse quo tempor voluptate iis o export a
          elit o quid possumus est firmissimum.
          </p>
        </div>
      </div>
      <div>
        <Linkbox title="about" description="Learn about Deena" className="box-1" img="forest-1.jpg" />
        <Linkbox title="services" description="What we do" className="box-2" img="forest-2.jpg" />
        <div style={{ width: `200px`, display: `inline-block`, margin: `20px`, verticalAlign: `middle` }}>
          <Image filename="treehouse-logo.png"/>
        </div>
        <Linkbox title="reviews" description="You're going to like us" className="box-3" img="forest-3.jpg" />
        <Linkbox title="contact" description="Get in touch" className="box-4" img="forest-4.jpg" />
      </div>
    </div>
  </Layout>
)

export default IndexPage
