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
    <Link to="/" sx={{ variant: "links.nav", fontSize: 4 }}>
      Chris Hayes
    </Link>
    <Nav sx={{ fontFamily: "monospace" }}>
      <Link to="/" sx={{ variant: "links.nav" }} activeClassName="active">
        Home
      </Link>
      <Link
        to="/articles"
        sx={{ variant: "links.nav" }}
        activeClassName="active"
      >
        Articles
      </Link>
    </Nav>
  </Container>
)

export default Header
