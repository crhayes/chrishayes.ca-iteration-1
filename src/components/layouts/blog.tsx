/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import BaseLayout from "./base"

const BlogLayout: React.FC = ({ children }) => (
  <BaseLayout>
    <div
      sx={{
        maxWidth: 680,
        margin: "auto",
      }}
    >
      {children}
    </div>
  </BaseLayout>
)

export default BlogLayout
