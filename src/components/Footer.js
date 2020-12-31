import React from "react"
import {
  FooterWrapper,
  FooterContent,
  FooterLink,
  FooterListWrapper,
  SocialMediaWrapper,
} from "../styles"
import { Twitter, GitHub } from "@material-ui/icons"

const Footer = ({ siteTitle, navLinks }) => {
  const footerArr = () => {
    return navLinks.es.map((el, i) => (
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
        <h6 style={{ position: "absolute", right: "2%", bottom: "2%" }}>
          {siteTitle} © {new Date().getFullYear()}, SamVW
        </h6>
      </FooterContent>
    </FooterWrapper>
  )
}

export { Footer }
