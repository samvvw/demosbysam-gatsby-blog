import styled from "styled-components"

export const MainWrapper = styled.main`
  grid-column: 1 /15;
  grid-row: 2 / span 1;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr repeat(12, minmax(auto, 4.2rem)) 1fr;
  grid-template-rows: auto;
  gap: 0 2rem;

  @media ${props => props.theme.breakpoints.tablet} {
    grid-column: 2 / span 6;
  }

  @media ${props => props.theme.breakpoints.tablet} {
    grid-column: 2 / span 6;
  }
`
