import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"

const About = () => {
  return (
    <Layout>
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
    </Layout>
  )
}

export default About
