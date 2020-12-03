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
        <div style={{ minWidth: `100px` }}>
          <Img fluid={data.placeholderImage.childImageSharp.fluid} />
        </div>
        <h1>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </h1>
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
