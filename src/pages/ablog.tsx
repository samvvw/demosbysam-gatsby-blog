import React from "react"

import { Layout, SEO, Image, Container } from "../components"

const Blog = () => {
  return (
    <Layout>
      <Container flexDirection="column" justifyContent="space-around">
        <SEO title="Blog" />
        <br />
        <br />
        <h1>Blog Page</h1>
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

export default Blog
