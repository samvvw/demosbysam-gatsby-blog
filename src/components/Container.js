import React from "react"
import { ContainerWrapper } from "../elements"

const Container = ({ children, ...props }) => {
  return <ContainerWrapper {...props}>{children}</ContainerWrapper>
}

export { Container }
