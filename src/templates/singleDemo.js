import React from "react"
import { graphql } from "gatsby"

import { Layout, SEO, Demo } from "../components"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { H1 } from "../styles"

import "../../language-tabs.css"
import { MDXProvider } from "@mdx-js/react"
import { Table, Code } from "../components"
import { preToCodeBlock } from "mdx-utils"

const components = {
  table: Table,
  pre: preProps => {
    const props = preToCodeBlock(preProps)
    if (props) {
      return <Code {...props} />
    }
    return <pre {...preProps} />
  },
  wrapper: ({ children }) => <>{children}</>,
}

const singleDemo = ({ data }) => {
  return (
    <MDXProvider components={components}>
      <Layout>
        <SEO title={data.contentfulDemos.title} />
        {/* {
        <pre>
          {JSON.stringify(data.contentfulBlogPost.heroImage.fluid, null, 2)}
        </pre>
      } */}
        <Demo>
          <H1>{data.contentfulDemos.title}</H1>
          <MDXRenderer>{data.contentfulDemos.body.childMdx.body}</MDXRenderer>
        </Demo>
      </Layout>
    </MDXProvider>
  )
}

export default singleDemo

export const pageQuery = graphql`
  query SingleDemoQuery($slug: String!) {
    contentfulDemos(slug: { eq: $slug }) {
      slug
      title
      description
      technologies
      createdAt(formatString: "MMM DD, YYYY")
      body {
        childMdx {
          body
        }
      }
    }
  }
`
