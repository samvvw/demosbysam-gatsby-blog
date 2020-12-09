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
  grid-template-columns: 50% 50%;
  justify-content: center;
  align-items: center;

  @media ${props => props.theme.breakpoints.tablet} {
    grid-column: 2 / span 6;
  }

  @media ${props => props.theme.breakpoints.tablet} {
    grid-column: 2 / span 6;
  }
`

// Nav links wrapper for desktop version

export const ListWrapper = styled.ul`
  list-style: none;
  grid-column: 2 / 3;
  display: flex;
  justify-content: space-around;

  & > li {
    font-size: 1.2rem;
    & > a {
      color: ${props => props.theme.palette.text.light1};
    }
  }
  & > li:hover {
    & > a {
      color: ${props => props.theme.palette.text.light2};
    }
  }

  @media ${props => props.theme.breakpoints.tablet} {
    display: none;
  }

  @media ${props => props.theme.breakpoints.tablet} {
    display: none;
  }
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

export const MenuWrapper = styled.div`
  display: none;
  color: ${props => props.theme.palette.text.light1};
  justify-content: flex-end;
  align-items: center;
  cursor: pointer;
  min-height: 80px;

  & :hover {
    color: ${props => props.theme.palette.text.light2};
  }

  @media ${props => props.theme.breakpoints.tablet} {
    display: flex;
  }

  @media ${props => props.theme.breakpoints.tablet} {
    display: flex;
  }
`

export const DrawerWrapper = styled.div`
  display: none;
  position: fixed;
  background-color: ${props => props.theme.palette.primary.main};
  height: 100%;
  width: 100%;
  transform: translateX(100%);
  transition: transform 250ms ease-in-out;

  @media ${props => props.theme.breakpoints.tablet} {
    display: flex;
    align-items: center;
    justify-content: center;
    &.open {
      transform: translateX(60%);
      transition: transform 250ms ease-in-out;
    }
  }

  @media ${props => props.theme.breakpoints.mobile} {
    display: flex;
    &.open {
      transform: translateX(0%);
      transition: transform 250ms ease-in-out;
    }
  }
`

// Nav links wrapper for mobile version
export const DrawerLinksWrapper = styled.ul`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  list-style: none;
  height: 50%;

  & > li {
    font-size: 1.3rem;
    & > a {
      color: ${props => props.theme.palette.text.light1};
    }
  }
  & > li:hover {
    & > a {
      color: ${props => props.theme.palette.text.light2};
    }
  }

  @media ${props => props.theme.breakpoints.tablet} {
    right: 30%;
  }

  @media ${props => props.theme.breakpoints.mobile} {
    right: 0%;
  }
`

export const CloseMenuWrapper = styled.div`
  position: absolute;
  right: 5%;
  top: 5%;
  color: ${props => props.theme.palette.text.light1};

  & :hover {
    color: ${props => props.theme.palette.text.light2};
  }

  @media ${props => props.theme.breakpoints.tablet} {
    right: 65%;
  }

  @media ${props => props.theme.breakpoints.mobile} {
    right: 5%;
  }
`
