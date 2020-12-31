import React from "react"
import { DemoWrapper } from "../styles"

export const Demo = ({ children, props }) => {
  return <DemoWrapper {...props}>{children}</DemoWrapper>
}
