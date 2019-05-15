import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Linkbox from "../components/linkbox"
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
    <Linkbox title="about" description="Learn about Deena" />
    <Linkbox title="services" description="What we do" />
    <Linkbox title="reviews" description="You're going to like us" />
    <Linkbox title="contact" description="Get in touch" />
  </Layout>
)

export default IndexPage
