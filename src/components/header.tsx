/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import { useColorMode } from "theme-ui"

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
  <header
    sx={{
      display: "grid",
      gridTemplateColumns: ["1fr", "repeat(2, 1fr)"],
      fontWeight: "semibold",
    }}
  >
    <Link
      to="/"
      sx={{
        variant: "links.nav",
        fontSize: 4,
      }}
    >
      Chris Hayes
    </Link>
    <nav
      sx={{
        textAlign: ["left", "right"],
        fontFamily: "monospace",
      }}
    >
      <Link
        to="/"
        sx={{ variant: "links.nav", mr: 4 }}
        activeClassName="active"
      >
        Home
      </Link>
      <Link
        to="/articles"
        sx={{ variant: "links.nav", mr: 4 }}
        activeClassName="active"
      >
        Articles
      </Link>
      <ThemeSwitcher />
    </nav>
  </header>
)

export default Header
