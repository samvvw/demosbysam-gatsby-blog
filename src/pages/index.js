import React from "react"
import { graphql, Link } from "gatsby"

import { Layout, SEO, HeroBanner, Container } from "../components"
import Img from "gatsby-image"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Inicio" />
    <HeroBanner />
    <Container
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      // style={{
      //   display: "flex",
      //   flexDirection: "column",
      //   alignItems: "center",
      //   justifyContent: "center",
      // }}
    >
      <h1>Under Construction...</h1>
      <h1 style={{ margin: "2rem 0" }}>
        {data.allContentfulHomePage.edges[0].node.heroImage.title}
      </h1>
      <Img
        style={{ minWidth: "360px", marginBottom: "2rem" }}
        fluid={data.allContentfulHomePage.edges[0].node.heroImage.fluid}
      />
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/contact/">Contact</Link>
    </Container>
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
