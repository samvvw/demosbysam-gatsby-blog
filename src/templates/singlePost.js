import React from "react"
import { graphql } from "gatsby"

const singlePost = ({ data }) => {
  return (
    <>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  )
}

export default singlePost

export const pageQuery = graphql`
  query SinglePostQuery($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      slug
      title
      body {
        childMdx {
          body
        }
      }
      publishDate(formatString: "MMM DD, YYYY")
      description {
        description
      }
      heroImage {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      tags
    }
  }
`
