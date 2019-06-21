import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import BackgroundImage from 'gatsby-background-image'

import Layout from "../components/layout"
import SEO from "../components/seo"


const About = () => (
  <StaticQuery
    query={graphql`
      query {
        headshot: file(relativePath: { eq: "headshot.png" }) {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        background: file(relativePath: { eq: "tree-sun.jpeg" }) {
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
        <SEO title="About" />
        <BackgroundImage
          fluid={data.background.childImageSharp.fluid}
          className="jumbotron jumbotron-fluid"
          loading="eager"
        >
          <p className="banner">About</p>
        </BackgroundImage>
        <div className="content">
          <div className="content-interior">
            <div id="about-content">
              <div id="headshot">
                <Img fluid={data.headshot.childImageSharp.fluid} />
              </div>
              <h1 id="greeting">
                *<br/><br/>
                Hi I'm <strong>Deena Adkins</strong>, the Creator of <strong>TreeHouse Transactions.</strong>
                <br/><br/>*
              </h1>
              <p style={{textAlign: `left`}}>
                Sint voluptate ita instituendarum, si minim et dolor id ullamco sunt qui 
                appellat cohaerescant, o si dolore pariatur. Ubi quae dolore summis commodo ab 
                quo cillum tamen id quamquam. Singulis enim enim probant anim, ut veniam 
                expetendis cohaerescant. Ut quid quid duis ullamco, ne anim quem veniam 
                cernantur, incididunt philosophari e vidisse, veniam expetendis ne imitarentur, 
                summis et consequat hic cillum qui ita in transferrem est o te quae irure sint 
                ita iudicem legam arbitror.Nostrud adipisicing aut proident. Velit appellat ad 
                pariatur se nescius transferrem sed officia non summis quo arbitror ut quid, 
                dolore incurreret a consequat. Sed eram tractavissent, ita incididunt 
                cohaerescant.
                <br/><br/>
                Se duis doctrina de irure litteris aut imitarentur. Ex commodo ut iudicem, 
                voluptate an quid consequat hic ita labore ingeniis, aliquip anim iudicem. Ad et 
                culpa noster quid.Ut ab malis mentitum aut officia velit se quamquam sempiternum 
                et dolore eruditionem ullamco dolor incididunt non constias illum veniam 
                doctrina velit. Aliqua ingeniis adipisicing ne eu sunt appellat, eram qui non 
                fore expetendis ex probant consectetur sed consequat, o fugiat ad anim, do 
                export aute magna appellat o veniam mentitum ab aute culpa, et hic aute 
                ingeniis. An ea concursionibus non multos quamquam quo expetendis in excepteur 
                nulla si consequat distinguantur ita a aliqua philosophari, cupidatat summis 
                export deserunt legam, sed dolore do enim de hic cupidatat qui ingeniis iis 
                officia elit mandaremus mandaremus.
                <br/><br/>
                Aut anim deserunt constias, vidisse ubi quis, laboris se tempor, quid consequat 
                praetermissum. Id te efflorescere non in minim quamquam senserit. Ad magna 
                commodo comprehenderit ex nostrud legam aliqua mandaremus amet. Pariatur ab 
                noster laboris ex expetendis sunt consequat, fugiat ab id fugiat incididunt si 
                in eu culpa cupidatat hic quis voluptate nescius, labore ex ex malis appellat, 
                enim incurreret litteris e iis ipsum officia.Nam labore quae quorum mentitum do 
                iis multos coniunctione. Tamen ab nescius, dolore sed cernantur o do malis 
                exquisitaque iis ad iudicem eu possumus. Arbitror legam irure ullamco summis, 
                labore an eiusmod o esse, in hic sunt quis dolor et ne laboris ne admodum, 
                fugiat distinguantur eiusmod velit proident, amet admodum possumus, est ad culpa 
                cupidatat sed eu illum eruditionem.
                <br/><br/>
                Ita dolor arbitrantur. Non nostrud quo aliquip non summis officia admodum. 
                Mandaremus sunt nam aliquip consectetur est in o instituendarum ea arbitror 
                ipsum tamen in export, ab incurreret reprehenderit in si cernantur ubi fabulas, 
                probant se cernantur se deserunt consectetur o cupidatat, arbitror quae iudicem 
                constias.Anim quo do legam litteris iis magna arbitror iis mentitum. Sint 
                nostrud reprehenderit. Ne quorum adipisicing ab laborum quis sunt iudicem anim. 
                Et arbitror firmissimum, hic incurreret iis quibusdam.
              </p>
              <Link to={'/services'}>
                <div className="nav-button">learn more about services</div>
              </Link>
            </div>
          </div>
        </div>
      </Layout>
    )}
  />
);

export default About
