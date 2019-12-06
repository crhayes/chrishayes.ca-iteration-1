import React from "react"
import { addDecorator, configure } from "@storybook/react"
import { ThemeProvider } from "theme-ui"

import theme from "../src/gatsby-plugin-theme-ui"
import GlobalStyles from "../src/components/global-styles"

import "typeface-source-code-pro"
import "typeface-source-sans-pro"
import "typeface-source-serif-pro"

// automatically import all files ending in *.stories.js
configure(require.context("../src", true, /\.stories\.tsx$/), module)

// Gatsby's Link overrides:
// Gatsby defines a global called ___loader to prevent its method calls from creating console errors you override it here
global.___loader = {
  enqueue: () => {},
  hovering: () => {},
}
// Gatsby internal mocking to prevent unnecessary errors in storybook testing environment
global.__PATH_PREFIX__ = ""
// This is to utilized to override the window.___navigate method Gatsby defines and uses to report what path a Link would be taking us to if it wasn't inside a storybook
window.___navigate = pathname => {
  action("NavigateTo:")(pathname)
}

addDecorator(story => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    {story()}
  </ThemeProvider>
))
