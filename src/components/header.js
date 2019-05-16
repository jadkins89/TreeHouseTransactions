import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { Component } from "react"
import { Navbar, Nav } from "react-bootstrap"


class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeKey: null
    };
  }
  componentDidMount() {
    this.setState({ activeKey: window.location.pathname })
  }

  render() {
    return (
      <Navbar collapseOnSelect expand="lg" className="navbar-custom" bg="custom" variant="dark">
        <Link to="/" className="navbar-brand">{ this.props.siteTitle }</Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
          <Nav id="link-container" className="ml-auto" activeKey={ this.state.activeKey }>
            <Nav.Link href="/">home</Nav.Link>
            <Nav.Link href="/about">about</Nav.Link>
            <Nav.Link href="/services">services</Nav.Link>
            <Nav.Link href="/reviews">reviews</Nav.Link>
            <Nav.Link href="/contact">contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
  )}
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
