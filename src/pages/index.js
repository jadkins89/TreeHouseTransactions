import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem`, marginLeft: `auto`, marginRight: `auto`, display: `block`, marginTop: `10px` }}>
      <Image />
    </div>
    <h1>The Greatest Website Ever</h1>
    <p>Give me all your money.</p>
    <p>You won't regret it.</p>
    <Link to="/about">
      <div className="link-boxs" id="box-1">
        <div className="link-box">
          <div style={{ width: `100%`}}>
            <p className="link-body">about</p>
            <p className="link-content">Learn about Deena</p>
          </div>
        </div>
      </div>
    </Link>
    <Link to="/services">
      <div className="link-boxs" id="box-2">
        <div className="link-box">
          <div style={{ width: `100%`}}>
            <p className="link-body">services</p>
            <p className="link-content">What we do</p>
          </div>
        </div>
      </div>
    </Link>
    <Link to="/reviews">
      <div className="link-boxs" id="box-3">
        <div className="link-box">
          <div style={{ width: `100%`}}>
            <p className="link-body">reviews</p>
            <p className="link-content">You're going to like us</p>
          </div>
        </div>
      </div>
    </Link>
    <Link to="/contact">
      <div className="link-boxs" id="box-4">
        <div className="link-box">
          <div style={{ width: `100%`}}>
            <p className="link-body">contact</p>
            <p className="link-content">Get in touch</p>
          </div>
        </div>
      </div>
    </Link>
  </Layout>
)

export default IndexPage
