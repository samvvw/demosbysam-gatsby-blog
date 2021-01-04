import React from "react"

import { Layout, SEO, HeroBanner, Container } from "../components"

const IndexPage = () => (
  <Layout>
    <SEO title="Inicio" />
    <HeroBanner />
    <Container
      flexDirection="column"
      alignItems="flex-start"
      justifyContent="space-between"
    >
      <div style={{ marginBottom: "1rem" }}>
        <h1>Main Call To Action</h1>
      </div>
      <div style={{ marginBottom: "1rem" }}>
        <h1>Demos destacados</h1>
      </div>
      <div style={{ marginBottom: "1rem" }}>
        <h1>Articulos destacados</h1>
      </div>
    </Container>
  </Layout>
)

export default IndexPage
