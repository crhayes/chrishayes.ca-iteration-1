/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"

import BaseLayout from "./base"

const PageLayout: React.FC<{ className?: string }> = ({
  className,
  children,
}) => (
  <BaseLayout>
    <div
      className={className}
      sx={{
        maxWidth: 1000,
        margin: "auto",
      }}
    >
      {children}
    </div>
  </BaseLayout>
)

export default PageLayout
