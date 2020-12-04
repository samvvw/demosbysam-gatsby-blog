import styled from "styled-components"

export const MainWrapper = styled.main`
  grid-column: 2 /14;
  grid-row: 2 / span 1;

  @media ${props => props.theme.breakpoints.tablet} {
    grid-column: 2 / span 6;
  }

  @media ${props => props.theme.breakpoints.tablet} {
    grid-column: 2 / span 6;
  }
`
