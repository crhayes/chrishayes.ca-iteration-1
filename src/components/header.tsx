/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import { useColorMode } from "theme-ui"

import styled from "../styled"

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 3rem;
`

const Nav = styled.nav`
  a:not(:last-of-type) {
    margin-right: 2rem;
  }
`

const ThemeSwitcher: React.FC = () => {
  const [colorMode, setColorMode] = useColorMode()

  return (
    <a
      sx={{
        variant: "links.nav",
        display: "inline-flex",
        transform: "scale(1.5)",
        cursor: "pointer",
      }}
      onClick={() => setColorMode(colorMode === "default" ? "dark" : "default")}
    >
      {colorMode === "default" ? "☀" : "☾"}
    </a>
  )
}

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
      <ThemeSwitcher />
    </Nav>
  </Container>
)

export default Header
