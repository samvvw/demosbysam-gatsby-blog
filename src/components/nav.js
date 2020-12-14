import PropTypes from "prop-types"
import React, { useState } from "react"
import {
  HeaderWrapper,
  NavWrapper,
  NavLink,
  ListWrapper,
  MenuWrapper,
  DrawerWrapper,
  DrawerBackdrop,
  CloseMenuWrapper,
  DrawerLinksWrapper,
  LogoWrapper,
} from "../elements"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import MenuIcon from "@material-ui/icons/Menu"
import CloseIcon from "@material-ui/icons/Close"

const Nav = ({ siteTitle, navLinks }) => {
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
    return navLinks.es.map((el, i) => (
      <NavLink
        key={el}
        to={`/${
          navLinks.en[i] !== "Home"
            ? navLinks.en[i].toLowerCase().split(" ").join("-")
            : ""
        }`}
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
        <LogoWrapper to="/">
          <Img fluid={data.placeholderImage.childImageSharp.fluid} />
          <h1>{siteTitle}</h1>
        </LogoWrapper>
        <ListWrapper style={{ listStyle: "none" }}>{navArr()}</ListWrapper>
        <MenuWrapper>
          <MenuIcon onClick={useDrawer} fontSize="large" />
        </MenuWrapper>
      </NavWrapper>
      <DrawerBackdrop className={`${drawer.drawer}`} onClick={useDrawer} />
      <DrawerWrapper className={`${drawer.drawer}`}>
        <DrawerLinksWrapper>{navArr()}</DrawerLinksWrapper>
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

export { Nav }
