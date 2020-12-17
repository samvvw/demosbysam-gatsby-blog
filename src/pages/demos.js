import React from "react"

import { Layout, SEO, Image, Container } from "../components"

const Demos = () => {
  return (
    <Layout>
      <Container
        flexDirection="column" justifyContent="space-around"
      >
        <SEO title="Demos" />
        <br />
        <br />
        <h1>Demos Page</h1>
        <br />
        <br />
        <p>Page under construction...</p>
        <br />
        <br />
        <div style={{ maxWidth: "800px" }}>
          <Image />
        </div>
        <br />
        <br />
      </Container>
    </Layout>
  )
}

export default Demos
