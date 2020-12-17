import React from "react"

import { Layout, SEO, Container } from "../components"

const NotFoundPage = () => (
  <Layout title="404">
    <SEO title="404: Not found" />
    <Container
      flexDirection="column" justifyContent="space-around"
    >
      <h1>404: Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Container>
  </Layout>
)

export default NotFoundPage
