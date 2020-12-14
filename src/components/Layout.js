/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import {
  GridWrapper,
  FooterWrapper,
  MainWrapper,
  FooterContent,
} from "../elements"
import {Nav} from "./"


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
        <FooterContent>© {new Date().getFullYear()}, SamVW</FooterContent>
      </FooterWrapper>
    </GridWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export { Layout }

