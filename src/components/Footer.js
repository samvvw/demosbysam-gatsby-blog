import React from "react"
import {
  FooterWrapper,
  FooterContent,
  FooterLink,
  FooterListWrapper,
  SocialMediaWrapper,
  Copyright,
} from "../styles"
import { Twitter, GitHub } from "@material-ui/icons"

const Footer = ({ siteTitle, navLinks }) => {
  const footerArr = () => {
    return navLinks.es.map((el, i) => (
      <>
        <FooterLink
          key={el}
          to={`/${
            navLinks.en[i] !== "Home"
              ? navLinks.en[i].toLowerCase().split(" ").join("-")
              : ""
          }`}
        >
          {el}
        </FooterLink>
        <hr />
      </>
    ))
  }
  return (
    <FooterWrapper style={{ color: "white" }}>
      <FooterContent>
        <FooterListWrapper>{footerArr()}</FooterListWrapper>
        <SocialMediaWrapper>
          <GitHub fontSize="large" />
          <Twitter fontSize="large" />
        </SocialMediaWrapper>
        <Copyright>
          {siteTitle} © {new Date().getFullYear()}, SamVW
        </Copyright>
      </FooterContent>
    </FooterWrapper>
  )
}

export { Footer }
