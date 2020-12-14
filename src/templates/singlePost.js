import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import { Layout, SEO, Post } from "../components"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { H1 } from "../elements"

const singlePost = ({ data }) => {
  return (
    <Layout>
      <SEO title={data.contentfulBlogPost.title} />
      {/* {
        <pre>
          {JSON.stringify(data.contentfulBlogPost.heroImage.fluid, null, 2)}
        </pre>
      } */}
      <Img
        fluid={data.contentfulBlogPost.heroImage.fluid}
        style={{ position: "absolute", width: "100%", height: "20rem" }}
      />
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
        fluid(maxWidth: 1600) {
          ...GatsbyContentfulFluid
        }
      }
      tags
    }
  }
`
