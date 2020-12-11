exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query MyQuery {
      allContentfulBlogPost(sort: { fields: publishDate, order: DESC }) {
        edges {
          node {
            slug
            publishDate
            title
          }
        }
      }
    }
  `)
  // Create paginater pages for posts

  const postPerPage = 3

  const numPages = Math.ceil(
    data.allContentfulBlogPost.edges.length / postPerPage
  )

  Array.from({ length: numPages }).forEach((_, i) => {
    actions.createPage({
      path: i === 0 ? `blog/1` : `blog/${i + 1}`,
      component: require.resolve("./src/templates/allPosts.js"),
      context: {
        limit: postPerPage,
        skip: i * postPerPage,
        numPages,
        currentPage: i + 1,
      },
    })
  })

  // Create single blog post

  data.allContentfulBlogPost.edges.forEach(edge => {
    const slug = edge.node.slug
    actions.createPage({
      path: `blog/${slug}`,
      component: require.resolve("./src/templates/singlePost.js"),
      context: { slug },
    })
  })
}
