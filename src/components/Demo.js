import React from "react"
import { DemoWrapper } from "../elements"

export const Demo = ({ children, props }) => {
  return <DemoWrapper {...props}>{children}</DemoWrapper>
}
