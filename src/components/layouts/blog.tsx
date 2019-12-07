import React from "react"
import styled from "@emotion/styled"
import BaseLayout from "./base"

const Container = styled.div`
  margin: auto;
  max-width: 680px;
`

const BlogLayout: React.FC = ({ children }) => (
  <BaseLayout>
    <Container>{children}</Container>
  </BaseLayout>
)

export default BlogLayout
