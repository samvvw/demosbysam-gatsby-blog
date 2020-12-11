import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"

const Demos = () => {
  return (
    <Layout>
      <div
        style={{
          gridColumn: "2 / 14",
        }}
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
      </div>
    </Layout>
  )
}

export default Demos
