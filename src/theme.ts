interface Colors {
  text: string
  background: string
  primary: string
  secondary: string
  muted: string
  modes?: {
    [key: string]: Colors | {}
  }
}

export interface Theme {
  breakpoints: string[]
  space: number[]
  fonts: {
    body: string
    heading: string
    monospace: string
  }
  fontSizes: number[]
  fontWeights: {
    body: number
    heading: number
    bold: number
    semibold: number
  }
  lineHeights: {
    body: number
    heading: number
  }
  colors: Colors
  links: {
    text: Object
  }
  styles: {
    root: {
      fontFamily: string
      lineHeight: string
      fontWeight: string
    }
    h1: {
      color: string
      fontFamily: string
      lineHeight: string
      fontWeight: string
      fontSize: number
    }
    h2: {
      color: string
      fontFamily: string
      lineHeight: string
      fontWeight: string
      fontSize: number
    }
    h3: {
      color: string
      fontFamily: string
      lineHeight: string
      fontWeight: string
      fontSize: number
    }
    h4: {
      color: string
      fontFamily: string
      lineHeight: string
      fontWeight: string
      fontSize: number
    }
    h5: {
      color: string
      fontFamily: string
      lineHeight: string
      fontWeight: string
      fontSize: number
    }
    h6: {
      color: string
      fontFamily: string
      lineHeight: string
      fontWeight: string
      fontSize: number
    }
    p: {
      color: string
      fontFamily: string
      fontWeight: string
      lineHeight: string
    }
    a: {
      color: string
    }
    pre: {
      padding: number
      fontFamily: string
      borderRadius: number
      overflowX: string
      code: {
        color: string
      }
    }
    code: {
      fontFamily: string
      fontSize: string
    }
    table: {
      width: string
      borderCollapse: string
      borderSpacing: number
    }
    th: {
      padding: number
      textAlign: string
      borderBottomColor: string
      borderBottomStyle: string
      borderBottomWidth: number
      ":first-child": object
      ":last-child": object
    }
    td: {
      padding: number
      textAlign: string
      borderBottomColor: string
      borderBottomStyle: string
      borderBottomWidth: number
      ":first-child": object
      ":last-child": object
    }
    img: {
      maxWidth: string
    }
  }
}
