import React from "react"
import { PostWrapper } from "../styles"

export const Post = ({ children, props }) => {
  return <PostWrapper {...props}>{children}</PostWrapper>
}
