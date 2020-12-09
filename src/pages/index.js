import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Inicio" />
    <div
      style={{
        gridColumn: "2 / 14",
      }}
    >
      <h1>Under Construction...</h1>
      <h1 style={{ margin: "2rem 0" }}>
        {data.allContentfulHomePage.edges[0].node.heroImage.title}
      </h1>
      <Img
        style={{ maxWidth: "400px", marginBottom: "2rem" }}
        fluid={data.allContentfulHomePage.edges[0].node.heroImage.fluid}
      />
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/contact/">Contact</Link>
    </div>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query HomePageQuery {
    allContentfulHomePage {
      edges {
        node {
          heroImage {
            title
            fluid(maxWidth: 600, maxHeight: 500) {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`
