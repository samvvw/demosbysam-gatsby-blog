import React from "react"
import { graphql } from "gatsby"

const allPosts = ({ pageContext, data }) => {
  return (
    <>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <pre>{JSON.stringify(pageContext, null, 2)}</pre>
    </>
  )
}

export default allPosts
export const pageQuery = graphql`
  query AllPostsQuery($skip: Int!, $limit: Int!) {
    allContentfulBlogPost(
      sort: { fields: publishDate, order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          slug
          publishDate(formatString: "MMM DD, YYYY")
          title
          description {
            description
          }
        }
      }
    }
  }
`
