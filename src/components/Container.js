import React from "react"
import { ContainerWrapper } from "../styles"

const Container = ({ children, ...props }) => {
  return <ContainerWrapper {...props}>{children}</ContainerWrapper>
}

export { Container }
