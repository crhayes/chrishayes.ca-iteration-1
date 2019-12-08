/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"

import SEO from "../seo"
import BaseLayout from "./base"

const PageLayout: React.FC = ({ children }) => (
  <BaseLayout>
    <div
      sx={{
        maxWidth: 1000,
        margin: "auto",
      }}
    >
      <SEO />
      {children}
    </div>
  </BaseLayout>
)

export default PageLayout
