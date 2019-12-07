import React from "react"
import { Global, css } from "@emotion/core"

const GlobalStyles: React.FC = () => (
  <Global
    styles={css`
      * {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }
    `}
  />
)

export default GlobalStyles
