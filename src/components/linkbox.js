import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

const Linkbox = ({ title, description }) => (
  <Link to={"/" + title}>
    <div className="link-boxs" id="box-1">
      <div className="link-box">
        <div style={{ width: `100%`}}>
          <p className="link-body">{title}</p>
          <p className="link-content">{description}</p>
        </div>
      </div>
    </div>
  </Link>
)

Linkbox.propTypes = {
  title: PropTypes.node.isRequired,
  description: PropTypes.node.isRequired,
}

export default Linkbox
