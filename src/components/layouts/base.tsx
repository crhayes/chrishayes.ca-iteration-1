/** @jsx jsx */
import React from "react"
import { jsx, Styled } from "theme-ui"

import Header from "../header"
import GlobalStyles from "../global-styles"
import SocialIcons from "../social-icons"

const BaseLayout: React.FC = ({ children }) => (
  <Styled.root
    sx={{
      maxWidth: [600, 1000, "100%"],
      margin: "auto",
      p: [25, 50],
    }}
  >
    <GlobalStyles />
    <Header />
    {children}
    <SocialIcons
      sx={{ display: "none", position: "fixed", bottom: 50, left: 50 }}
    />
  </Styled.root>
)

export default BaseLayout
