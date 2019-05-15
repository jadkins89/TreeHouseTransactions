import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

const Linkbox = ({ title, description, id }) => (
  <Link to={"/" + title}>
    <div className="link-boxs" id={id}>
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
  id: PropTypes.node.isRequired
}

export default Linkbox
