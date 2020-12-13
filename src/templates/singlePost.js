import React from "react"
import { graphql } from "gatsby"

import {Layout, SEO, Post} from "../components"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { H1 } from "../elements"

const singlePost = ({ data }) => {
  return (
    <Layout>
      <SEO />
      {/* {<pre>{JSON.stringify(data.contentfulBlogPost, null, 2)}</pre>} */}
      <Post>
        <H1>{data.contentfulBlogPost.title}</H1>
        <MDXRenderer>{data.contentfulBlogPost.body.childMdx.body}</MDXRenderer>
      </Post>
    </Layout>
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
