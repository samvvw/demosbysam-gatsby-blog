import React from "react"

import { Layout, SEO } from "../components"

const NotFoundPage = () => (
  <Layout title="404">
    <SEO title="404: Not found" />
    <div
      style={{
        gridColumn: "2 / 14",
      }}
    >
      <h1>404: Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </div>
  </Layout>
)

export default NotFoundPage
