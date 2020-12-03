import styled from "styled-components"

export const HeaderWrapper = styled.header`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr repeat(12, minmax(auto, 4.2rem)) 1fr;
  grid-template-rows: ${props => props.theme.nav.height};
  gap: 0 2rem;
  position: fixed;
  z-index: 1000;
  background-color: ${props => props.theme.palette.primary.dark};
`

export const NavWrapper = styled.nav`
  grid-column: 2 / span 12;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`
