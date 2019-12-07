/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import { Link } from "gatsby"

import styled from "../styled"

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  margin-top: 3rem;
`

const Nav = styled.nav`
  a:not(:last-of-type) {
    margin-right: 2rem;
  }
`

const Header: React.FC = () => (
  <Container sx={{ fontWeight: "semibold" }}>
    <Link to="/" sx={{ fontSize: 4 }}>
      Chris Hayes
    </Link>
    <Nav sx={{ fontFamily: "monospace" }}>
      <Link to="/" activeClassName="active">
        Home
      </Link>
      <Link to="/articles" activeClassName="active">
        Articles
      </Link>
    </Nav>
  </Container>
)

export default Header
