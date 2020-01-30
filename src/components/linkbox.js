import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import BackgroundImage from 'gatsby-background-image'

const Linkbox = ({ title, description, fluid }) => (
  <Link to={"/" + title}>
    <BackgroundImage
      fluid={fluid}
      className="link-boxs"
    >
      <div className="link-box">
        <div style={{ width: `100%`}}>
          <p className="link-body">{title}</p>
          <p className="link-content">{description}</p>
        </div>
      </div>
    </BackgroundImage>
  </Link>
)

Linkbox.propTypes = {
  title: PropTypes.node.isRequired,
  description: PropTypes.node.isRequired
}

export default Linkbox
