import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import {
  HeaderWrapper,
  NavWrapper,
  NavLink,
  ListWrapper,
  MenuWrapper,
  DrawerWrapper,
  CloseMenuWrapper,
} from "../elements"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import MenuIcon from "@material-ui/icons/Menu"
import CloseIcon from "@material-ui/icons/Close"

const Nav = ({ siteTitle, language, navLinks }) => {
  const [drawer, setDrawer] = useState({ drawer: "" })
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

  const useDrawer = () => {
    drawer.drawer === ""
      ? setDrawer({ drawer: "open" })
      : setDrawer({ drawer: "" })
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
        <MenuWrapper>
          <MenuIcon onClick={useDrawer} />
        </MenuWrapper>
      </NavWrapper>
      <DrawerWrapper className={`${drawer.drawer}`}>
        <CloseMenuWrapper>
          <CloseIcon onClick={useDrawer} fontSize="large" />
        </CloseMenuWrapper>
      </DrawerWrapper>
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
