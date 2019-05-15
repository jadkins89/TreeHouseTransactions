import { Link } from "gatsby"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Navbar, Nav } from "react-bootstrap"


const Header = ({siteTitle}) => (
      <Navbar collapseOnSelect expand="md" className="navbar-custom" bg="custom" variant="dark">
        <Link to="/" className="navbar-brand">{ siteTitle }</Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
          <Nav id="link-container" className="ml-auto" activeKey={ window.location.pathname }>
            <Nav.Link href="/">home</Nav.Link>
            <Nav.Link href="/about">about</Nav.Link>
            <Nav.Link href="/services">services</Nav.Link>
            <Nav.Link href="/reviews">reviews</Nav.Link>
            <Nav.Link href="/contact">contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
)

export default Header
