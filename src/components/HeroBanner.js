import React from "react"
import { HeroWrapper } from "../elements"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

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
    </HeroWrapper>
  )
}

export { HeroBanner }
