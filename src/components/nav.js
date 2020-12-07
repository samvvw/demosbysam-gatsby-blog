import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { HeaderWrapper, NavWrapper, NavLink, ListWrapper } from "../elements"

import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Nav = ({ siteTitle, language, navLinks }) => {
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

  const navArr = () => {
    return navLinks.en.map(el => (
      <NavLink
        key={el}
        to={`/${el !== "Home" ? el.toLowerCase().split(" ").join("-") : ""}`}
      >
        {el}
      </NavLink>
    ))
  }
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
            justifyContent: "flex-start",
            minWidth: "300px",
          }}
        >
          {/* <div style={{ minWidth: `100px` }}> */}
          <Img
            fluid={data.placeholderImage.childImageSharp.fluid}
            style={{
              minWidth: `80px`,
              marginRight: "1rem",
            }}
          />
          {/* </div> */}
          <h1
            style={{
              margin: "0 1rem",
            }}
          >
            {siteTitle}
          </h1>
          <code>{language}</code>
        </Link>
        <ListWrapper style={{ listStyle: "none" }}>
          {navArr(language)}
        </ListWrapper>
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
