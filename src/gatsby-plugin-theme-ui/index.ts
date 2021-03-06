import { Theme } from "../theme"
import vsDark from "@theme-ui/prism/presets/vs-dark.json"

const theme: Theme = {
  breakpoints: ["768px", "1000px"],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    body: "Source Sans Pro, PT Sans, Microsoft Sans Serif, sans-serif",
    heading: "Source Sans Pro, PT Sans, Microsoft Sans Serif, sans-serif",
    monospace: "Source Code Pro, monospace",
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
    semibold: 600,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  colors: {
    text: "#000",
    background: "#fff",
    primary: "blue",
    secondary: "#30c",
    muted: "#f6f6f6",
    modes: {
      dark: {
        text: "#fff",
        background: "#000",
        primary: "#0fc",
        secondary: "#0cf",
        muted: "#011",
      },
    },
  },
  links: {
    text: {
      color: "text",
      textDecoration: "none",
      "&:hover": {
        color: "primary",
      },
      "&:active": {
        color: "secondary",
      },
      "&.active": {
        color: "primary",
      },
    },
  },
  styles: {
    root: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body",
    },
    h1: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 6,
    },
    h2: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 5,
    },
    h3: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 4,
    },
    h4: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 3,
    },
    h5: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 2,
    },
    h6: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 1,
    },
    p: {
      color: "text",
      fontFamily: "body",
      fontWeight: "body",
      lineHeight: "body",
    },
    a: {
      color: "primary",
    },
    pre: {
      ...vsDark,
      padding: 20,
      borderRadius: 5,
      fontFamily: "monospace",
      overflowX: "auto",
      code: {
        color: "inherit",
      },
    },
    code: {
      fontFamily: "monospace",
      fontSize: "inherit",
    },
    table: {
      width: "100%",
      borderCollapse: "separate",
      borderSpacing: 0,
    },
    th: {
      padding: 3,
      textAlign: "left",
      borderBottomColor: "muted",
      borderBottomStyle: "solid",
      borderBottomWidth: 1,
      ":first-child": {
        pl: 0,
      },
      ":last-child": {
        pr: 0,
      },
    },
    td: {
      padding: 3,
      textAlign: "left",
      borderBottomColor: "muted",
      borderBottomStyle: "solid",
      borderBottomWidth: 1,
      ":first-child": {
        pl: 0,
      },
      ":last-child": {
        pr: 0,
      },
    },
    img: {
      maxWidth: "100%",
    },
  },
}

export default theme
