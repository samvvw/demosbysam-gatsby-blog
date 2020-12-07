/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { GridWrapper, FooterWrapper, MainWrapper } from "../elements"
import Nav from "./nav"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          navLinks {
            en
            es
          }
        }
      }
    }
  `)

  return (
    <GridWrapper>
      <Nav
        siteTitle={data.site.siteMetadata?.title || `Title`}
        navLinks={data.site.siteMetadata.navLinks}
      />
      <MainWrapper>{children}</MainWrapper>
      <FooterWrapper style={{ color: "white" }}>
        © {new Date().getFullYear()}, SamVW
      </FooterWrapper>
    </GridWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
