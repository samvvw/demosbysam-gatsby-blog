import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

export const HeaderWrapper = styled.header`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr repeat(12, minmax(auto, 5rem)) 1fr;
  grid-template-rows: ${props => props.theme.nav.height};
  gap: 0 2rem;
  position: fixed;
  z-index: 1000;
  background-color: ${props => props.theme.palette.surface.light1};
  box-shadow: ${props => props.theme.shadows.shadow1};

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

  @media ${props => props.theme.breakpoints.mobile} {
    grid-column: 2 / span 6;
  }
`

export const LogoWrapper = styled(props => <Link {...props} />)`
  color: ${props => props.theme.palette.primary.dark};
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  max-width: 305px;
  min-width: 260px;

  & > img {
    width: 90px;
    margin-right: 1rem;
  }
  & > h1 {
    margin-left: 1rem;
  }

  @media ${props => props.theme.breakpoints.mobile} {
    & > img {
      width: 80px;
      margin-right: 0.4rem;
    }
    & > h1 {
      margin-left: 0.4rem;
    }
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
    font-weight: 500;
    & > a {
      color: ${props => props.theme.palette.primary.dark};
    }
  }
  & > li:hover {
    & > a {
      color: ${props => props.theme.palette.secondary.main};
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

export const MenuWrapper = styled.div`
  display: none;
  color: ${props => props.theme.palette.primary.dark};
  justify-content: flex-end;
  align-items: center;
  cursor: pointer;
  min-height: 80px;

  & :hover {
    color: ${props => props.theme.palette.secondary.main};
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
  background-color: ${props => props.theme.palette.primary.dark};
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
export const DrawerBackdrop = styled.div`
  display: none;
  position: fixed;
  background-color: ${props => props.theme.palette.surface.dark2};
  height: 100%;
  width: 100%;
  transform: translate(-100%);
  transition: transform 250ms ease-in-out;
  cursor: pointer;
  opacity: 0.4;

  @media ${props => props.theme.breakpoints.tablet} {
    display: flex;
    align-items: center;
    justify-content: center;
    &.open {
      transform: translateX(-40%);
      transition: transform 250ms ease-in-out;
    }
  }

  @media ${props => props.theme.breakpoints.mobile} {
    display: none;
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
