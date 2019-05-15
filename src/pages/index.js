import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
import Linkbox from "../components/linkbox"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem`, marginLeft: `auto`, marginRight: `auto`, display: `block`, marginTop: `10px` }}>
      <Image filename="treehouse-logo.png"/>
    </div>
    <h1>The Greatest Website Ever</h1>
    <p>Give me all your money.</p>
    <p>You won't regret it.</p>
    <Linkbox title="about" description="Learn about Deena" className="box-1" img="forest-1.jpg" />
    <Linkbox title="services" description="What we do" className="box-2" img="forest-2.jpg" />
    <Linkbox title="reviews" description="You're going to like us" className="box-3" img="forest-3.jpg" />
    <Linkbox title="contact" description="Get in touch" className="box-4" img="forest-4.jpg" />
  </Layout>
)

export default IndexPage
