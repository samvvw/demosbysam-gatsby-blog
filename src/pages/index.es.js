import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Img from "gatsby-image"

const IndexPage = ({ data, location }) => (
  <Layout
    language={location.pathname === "/" ? "en" : location.pathname.substring(1)}
  >
    <SEO title="Inicio" />
    <h1>En construccion...</h1>
    <div style={{ maxWidth: `30px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <h1 style={{ margin: "2rem 0" }}>
      {data.allContentfulHomePage.edges[0].node.heroImage.title}
    </h1>
    <Img
      style={{ maxWidth: "400px", marginBottom: "2rem" }}
      fluid={data.allContentfulHomePage.edges[0].node.heroImage.fluid}
    />
    <Link to="/page-2/">Ir a la pagina 2</Link> <br />
    <Link to="/using-typescript/">Ir a "Usando Typescript"</Link>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query InicioQuery {
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
