import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"

const Blog = ({ location }) => {
  const capitalizeFirstLetter = str => {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }
  return (
    <Layout>
      <SEO
        title={capitalizeFirstLetter(location.pathname.replace(/[/]/g, ""))}
      />
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
    </Layout>
  )
}

export default Blog
