/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import Img from "gatsby-image"
import { graphql } from "gatsby"

import SEO from "../components/seo"
import PageLayout from "../components/layouts/page"

const NotFoundPage: React.FC<any> = ({ data: { file } }) => (
  <PageLayout
    sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      mt: 4,
    }}
  >
    <SEO title="Page Not Found | Chris Hayes" />
    <div sx={{ width: [300, 400] }}>
      <Img fluid={file.childImageSharp.fluid} />
    </div>
    <h1 sx={{ my: 0, mt: [3, 0], textAlign: "center", fontSize: [6, 8] }}>
      404
    </h1>
    <h2 sx={{ my: 0, textAlign: "center", fontSize: [3, 4] }}>
      Sorry, we couldn't find that page.
    </h2>
    <a
      sx={{ variant: "links.text" }}
      href="https://icons8.com/"
      rel="noopener"
      target="_blank"
    >
      <small>Image courtesy of Icons8</small>
    </a>
  </PageLayout>
)

export default NotFoundPage

export const query = graphql`
  query {
    file(relativePath: { eq: "404.png" }) {
      childImageSharp {
        fluid(maxWidth: 400, maxHeight: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
