import React from "react"
import { PostWrapper } from "../elements"

export const Post = ({ children, props }) => {
  return <PostWrapper {...props}>{children}</PostWrapper>
}
