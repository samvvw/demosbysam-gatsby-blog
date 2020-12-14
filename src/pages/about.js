import React from "react"

import { Layout, SEO, Image } from "../components"

const About = () => {
  return (
    <Layout>
      <div
        style={{
          gridColumn: "2 / 14",
        }}
      >
        <SEO title="Sobre nosotros" />
        <br />
        <br />
        <h1>About Page</h1>
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

export default About
