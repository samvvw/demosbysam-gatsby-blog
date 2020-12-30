import React from "react"
import { HeroWrapper } from "../elements"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import CSS from "../images/CSS3_logo_and_wordmark.svg"
import HTML from "../images/HTML5_Logo.svg"
import JS from "../images/javascript.svg"
import SVG from "../images/1logo.svg"
import SVG2 from "../images/logo.svg"

const HeroBanner = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "under-construction.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <HeroWrapper>
      <Img
        fluid={data.placeholderImage.childImageSharp.fluid}
        style={{ height: "25rem" }}
      />
      <div
        style={{ display: "flex", border: "red solid 1px", height: "18rem" }}
      >
        <img src={CSS} alt="" />
        <img src={HTML} alt="" />
        <img src={JS} alt="" />
        <img src={SVG} alt="" />
        <img src={SVG2} alt="" />
      </div>
    </HeroWrapper>
  )
}

export { HeroBanner }
