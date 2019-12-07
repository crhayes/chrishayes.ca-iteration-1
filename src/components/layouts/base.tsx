/** @jsx jsx */
import React from "react"
import { jsx, Styled } from "theme-ui"

import styled from "../../styled"
import Header from "../header"
import GlobalStyles from "../global-styles"
import SocialIcons from "../social-icons"

const Container = styled(Styled.root)`
  margin: auto;
  padding: 0 50px;
  box-sizing: border-box;
`

const BaseLayout: React.FC = ({ children }) => (
  <Container>
    <GlobalStyles />
    <Header />
    {children}
    <SocialIcons sx={{ position: "fixed", bottom: 50, left: 50 }} />
  </Container>
)

export default BaseLayout
