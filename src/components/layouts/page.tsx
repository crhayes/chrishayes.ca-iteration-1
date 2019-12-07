import React from "react"
import styled from "@emotion/styled"
import BaseLayout from "./base"

const Container = styled.div`
  margin: auto;
  max-width: 1000px;
`

const PageLayout: React.FC = ({ children }) => (
  <BaseLayout>
    <Container>{children}</Container>
  </BaseLayout>
)

export default PageLayout
