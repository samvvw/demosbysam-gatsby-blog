import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

export const FooterWrapper = styled.footer`
  grid-column: 1 / span 14;
  grid-row: 3 / 4;
  background-color: ${props => props.theme.palette.surface.dark1};
  height: 100%;
  display: grid;
  grid-template-columns: 1fr repeat(12, minmax(auto, 5rem)) 1fr;
  gap: 0 2rem;

  @media ${props => props.theme.breakpoints.tablet} {
    grid-template-columns: 2rem repeat(6, 1fr) 2rem;
    grid-gap: 0 1rem;
    grid-column: 1 / span 8;
  }

  @media ${props => props.theme.breakpoints.mobile} {
    grid-template-columns: 1rem repeat(6, 1fr) 1rem;
    grid-column: 1 / span 8;
  }
`
export const FooterContent = styled.div`
  grid-column: 2 / 14;
  display: flex;
  justify-content: space-between;
  padding: 0 0.5rem;
  position: relative;

  @media ${props => props.theme.breakpoints.tablet} {
    grid-column: 2 / span 6;
  }

  @media ${props => props.theme.breakpoints.mobile} {
    grid-column: 1 / span 8;
    flex-direction: column;
    justify-content: center;
  }
`

export const FooterListWrapper = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 0.75rem 0;

  & > li {
    font-size: 1rem;
    & > a {
      color: ${props => props.theme.palette.text.light1};
    }
  }
  & > li:hover {
    & > a {
      color: ${props => props.theme.palette.text.light2};
    }
  }

  & > hr {
    width: 70%;
    margin: auto;
    display: none;
  }

  @media ${props => props.theme.breakpoints.tablet} {
  }

  @media ${props => props.theme.breakpoints.mobile} {
    & > li {
      text-align: center;
      font-size: 1.2rem;
      margin: 0.5rem 0;
    }
    & > hr {
      display: block;
    }
    hr:last-child {
      display: none;
    }
  }
`

const FooterList = props => {
  return (
    <li>
      <Link {...props} />
    </li>
  )
}
export const FooterLink = styled(props => <FooterList {...props} />)`
  text-decoration: none;
  color: white;
`

export const SocialMediaWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.75rem;

  & > * {
    margin: 0 0.5rem;
  }

  @media ${props => props.theme.breakpoints.tablet} {
  }

  @media ${props => props.theme.breakpoints.mobile} {
    justify-content: center;
    & > * {
      margin: 1rem 0.5rem;
    }
  }
`

export const Copyright = styled.h6`
  position: absolute;
  right: 2%;
  bottom: 2%;
  @media ${props => props.theme.breakpoints.tablet} {
  }

  @media ${props => props.theme.breakpoints.mobile} {
    transform: translateX(50%);
    right: 50%;
  }
`
