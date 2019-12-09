/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"

interface Props {
  as?: React.ElementType
}

const ScreenReaderOnly: React.FC<Props> = ({
  as: Element = "div",
  children,
}) => (
  <Element
    sx={{
      position: "absolute",
      width: "1px",
      height: "1px",
      padding: "0",
      margin: "-1px",
      overflow: "hidden",
      clip: "rect(0,0,0,0)",
      border: "0",
    }}
  >
    {children}
  </Element>
)

export default ScreenReaderOnly
