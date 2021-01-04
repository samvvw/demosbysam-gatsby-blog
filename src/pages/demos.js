import React from "react"
import { Link, graphql } from "gatsby"

import { Layout, SEO, Container } from "../components"

const Demos = ({ data }) => {
  const demos = data.allContentfulDemos.edges
  return (
    <Layout>
      <Container flexDirection="column" justifyContent="space-around">
        <SEO title="Demos" />
        <h1>Demos Page</h1>
        {demos.map((demo, index) => (
          <div key={index}>
            <h1>{demo.node.title}</h1>
            <small>{demo.node.createdAt}</small>
            <p>{demo.node.description}</p>
            <Link to={`/demos/${demo.node.slug}`}>read more...</Link>
          </div>
        ))}
      </Container>
    </Layout>
  )
}

export default Demos

export const demosQuery = graphql`
  query demosPageQuery {
    allContentfulDemos(sort: { fields: creationDate, order: DESC }) {
      edges {
        node {
          slug
          title
          description
          createdAt(formatString: "MMM DD, YYYY")
        }
      }
    }
  }
`
