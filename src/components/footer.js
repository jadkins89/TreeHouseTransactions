import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const Footer = () => (
  <div className="bottom-container">
    <div className="color-bar">
      <a className="linkedin-icon-footer" href="https://www.linkedin.com/in/deenaadkins/"><FontAwesomeIcon icon={faLinkedinIn} size="2x" /></a>
    </div>
    <div className="bottom-bar">
      <div>
        <p><a className="bottom-content" href="mailto:tcteam@treehousetransactions.com">tcteam@treehousetransactions.com</a></p>
        <p className="bottom-content" id="business-name">TreeHouse Transactions</p>
      </div>
    </div>
  </div>
)

export default Footer
