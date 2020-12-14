import React from "react"
import { graphql, Link } from "gatsby"
import { Layout, SEO, AllPostsContainer, PostCard } from "../components"
import { H1, P } from "../elements"

const allPosts = ({ pageContext, data }) => {
  const posts = data.allContentfulBlogPost.edges
  const { currentPage, numPages } = pageContext
  return (
    <Layout>
      <SEO title="Blog" />
      <AllPostsContainer>
        {/* <pre>{JSON.stringify(posts[0].node.description, null, 2)}</pre> */}
        <pre>{JSON.stringify(pageContext, null, 2)}</pre>
        {posts.map(post => (
          <PostCard key={post.node.title}>
            <Link to={`/blog/${post.node.slug}`}>
              <H1 color="dark2" weight="bold">
                {post.node.title}
              </H1>
            </Link>
            <P>{post.node.publishDate}</P>
            <P color="dark2">{post.node.description.description}</P>
          </PostCard>
        ))}
        {currentPage !== 1 ? (
          <Link to={currentPage === 2 ? `/blog` : `/blog/${currentPage - 1}`}>
            Prev
          </Link>
        ) : (
          ""
        )}
        {currentPage !== numPages ? (
          <Link to={`/blog/${currentPage + 1}`}>Next</Link>
        ) : (
          ""
        )}
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
