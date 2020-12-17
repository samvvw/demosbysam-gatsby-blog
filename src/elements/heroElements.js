import styled from "styled-components"

export const HeroWrapper = styled.div`
  grid-column: 1 / span 14;
  /* height: 16rem; */
  overflow: hidden;
  @media ${props => props.theme.breakpoints.tablet} {
    grid-column: 1 / span 9;
  }

  @media ${props => props.theme.breakpoints.mobile} {
    grid-column: 1 / span 9;
  }
`
