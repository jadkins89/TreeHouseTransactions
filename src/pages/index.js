import React from "react"

import Layout from "../components/layout"
import Linkbox from "../components/linkbox"
import Image from "../components/image"
import SEO from "../components/seo"

// Write style to modify size of boxes based on screen size

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>The Greatest Website Ever</h1>
    <p>Give me all your money.</p>
    <p>You won't regret it.</p>
    <div>
      <Linkbox title="about" description="Learn about Deena" className="box-1" img="forest-1.jpg" />
      <Linkbox title="services" description="What we do" className="box-2" img="forest-2.jpg" />
      <div style={{ width: `200px`, display: `inline-block`, margin: `20px`, verticalAlign: `middle` }}>
        <Image filename="treehouse-logo.png"/>
      </div>
      <Linkbox title="reviews" description="You're going to like us" className="box-3" img="forest-3.jpg" />
      <Linkbox title="contact" description="Get in touch" className="box-4" img="forest-4.jpg" />
    </div>
  </Layout>
)

export default IndexPage
