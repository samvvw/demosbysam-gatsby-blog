import React from "react"
import { graphql } from "gatsby"
import { Layout, SEO, AllPostsContainer, PostCard } from "../components"
import { H1, P } from "../elements"

const allPosts = ({ pageContext, data }) => {
  const posts = data.allContentfulBlogPost.edges
  return (
    <Layout>
      <SEO title="Blog" />
      <AllPostsContainer>
        {/* <pre>{JSON.stringify(posts[0].node.description, null, 2)}</pre> */}
        <pre>{JSON.stringify(pageContext, null, 2)}</pre>
        {posts.map(post => (
          <PostCard>
            <H1>{post.node.title}</H1>
            <P>{post.node.publishDate}</P>
            <P>{post.node.description.description}</P>
          </PostCard>
        ))}
      </AllPostsContainer>
    </Layout>
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
