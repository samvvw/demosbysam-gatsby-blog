import styled from "styled-components"

export const MainWrapper = styled.main`
  grid-column: 1 /15;
  grid-row: 2 / span 1;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr repeat(12, minmax(auto, 4.2rem)) 1fr;
  grid-template-rows: auto;
  gap: 0 2rem;
  /* border: red solid 3px; */

  @media ${props => props.theme.breakpoints.tablet} {
    grid-template-columns: 1rem repeat(6, 1fr) 1rem;
    grid-gap: 0 1rem;
    grid-column: 1 / 9;
  }

  @media ${props => props.theme.breakpoints.mobile} {
    grid-template-columns: 1rem repeat(6, 1fr) 1rem;

    grid-column: 1 / 9;
  }
`
