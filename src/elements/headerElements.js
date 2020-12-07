import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

export const HeaderWrapper = styled.header`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr repeat(12, minmax(auto, 4.2rem)) 1fr;
  grid-template-rows: ${props => props.theme.nav.height};
  gap: 0 2rem;
  position: fixed;
  z-index: 1000;
  background-color: ${props => props.theme.palette.primary.dark};

  @media ${props => props.theme.breakpoints.tablet} {
    grid-template-columns: 2rem repeat(6, 1fr) 2rem;
    grid-gap: 0 1rem;
  }

  @media ${props => props.theme.breakpoints.mobile} {
    grid-template-columns: 1rem repeat(6, 1fr) 1rem;
  }
`

export const NavWrapper = styled.nav`
  grid-column: 2 / span 12;
  display: grid;
  grid-template-columns: 60% 40%;
  justify-content: center;
  align-items: center;

  @media ${props => props.theme.breakpoints.tablet} {
    grid-column: 2 / span 6;
  }

  @media ${props => props.theme.breakpoints.tablet} {
    grid-column: 2 / span 6;
  }
`

export const ListWrapper = styled.ul`
  list-style: none;
  grid-column: 2 / 3;
  display: flex;
  justify-content: space-around;
`

const NavList = props => {
  return (
    <li>
      <Link {...props} />
    </li>
  )
}
export const NavLink = styled(props => <NavList {...props} />)`
  text-decoration: none;
  color: white;
`

export const ButtonWrapper = styled(props => <Link {...props} />)`
  padding: 0.5rem 0.75rem;
  background-color: ${props => props.theme.colors.main1};
  border-radius: 0.5rem;
  color: ${props => props.theme.colors.light1};
  font-weight: 700;
  font-size: 0.875rem;
  width: fit-content;
  transition: filter 0.3s ease;
  text-decoration: none;
  &:hover,
  &:focus {
    filter: brightness(110%);
  }
`
