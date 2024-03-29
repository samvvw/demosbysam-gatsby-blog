import React from "react"
import { HeroWrapper, TechLogosWrapper, HeroFilter } from "../styles"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import CSSLOGO from "../images/css3.svg"
import HTMLLOGO from "../images/html-logo.svg"
import JSLOGO from "../images/js-logo.svg"
import BASHLOGO from "../images/bash-logo.svg"
import GITLOGO from "../images/git-logo.svg"
import NODEJSLOGO from "../images/nodejs-logo.svg"
import NPMLOGO from "../images/npm-logo.svg"
import REACTLOGO from "../images/react-logo.svg"
import VSCODELOGO from "../images/vscode-logo.svg"
import GATSBYLOGO from "../images/gatsby-logo.svg"

const HeroBanner = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "bg-texture.png" }) {
        childImageSharp {
          fluid(maxWidth: 1600) {
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
        style={{ height: "100%", opacity: "1" }}
      />
      <HeroFilter />
      <TechLogosWrapper>
        <img src={HTMLLOGO} alt="" />
        <img src={CSSLOGO} alt="" />
        <img src={JSLOGO} alt="" />
        <img src={BASHLOGO} alt="" />
        <img src={GITLOGO} alt="" />
        <img src={NODEJSLOGO} alt="" />
        <img src={NPMLOGO} alt="" />
        <img src={REACTLOGO} alt="" />
        <img src={GATSBYLOGO} alt="" />
        <img src={VSCODELOGO} alt="" />
      </TechLogosWrapper>
    </HeroWrapper>
  )
}

export { HeroBanner }
