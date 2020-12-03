import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { HeaderWrapper, NavWrapper } from "../elements"

import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Nav = ({ siteTitle }) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "drawing_svg.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <HeaderWrapper>
      <NavWrapper>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            minWidth: "330px",
          }}
        >
          {/* <div style={{ minWidth: `100px` }}> */}
          <Img
            fluid={data.placeholderImage.childImageSharp.fluid}
            style={{
              minWidth: `100px`,
            }}
          />
          {/* </div> */}
          <h1>{siteTitle}</h1>
        </Link>
      </NavWrapper>
    </HeaderWrapper>
  )
}

Nav.propTypes = {
  siteTitle: PropTypes.string,
}

Nav.defaultProps = {
  siteTitle: ``,
}

export default Nav
