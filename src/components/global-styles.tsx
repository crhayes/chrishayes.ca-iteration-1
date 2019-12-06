import React from "react"
import { Theme } from "../theme"
import { Global, css } from "@emotion/core"

const GlobalStyles: React.FC = () => (
  <Global
    styles={(theme: Theme) => css`
      * {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      body {
        font-family: ${theme.fonts.body};
        font-weight: ${theme.fontWeights.body};
        line-height: ${theme.lineHeights.body};
      }
    `}
  />
)

export default GlobalStyles
