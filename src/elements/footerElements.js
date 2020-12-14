import styled from "styled-components"

export const FooterWrapper = styled.footer`
  grid-column: 1 / span 14;
  grid-row: 3 / 4;
  background-color: ${props => props.theme.palette.surface.dark1};
  height: 100%;
  display: grid;
  grid-template-columns: 1fr repeat(12, minmax(auto, 4.2rem)) 1fr;
  gap: 0 2rem;

  @media ${props => props.theme.breakpoints.tablet} {
    grid-template-columns: 2rem repeat(6, 1fr) 2rem;
    grid-gap: 0 1rem;
    grid-column: 1 / span;
  }

  @media ${props => props.theme.breakpoints.mobile} {
    grid-template-columns: 1rem repeat(6, 1fr) 1rem;
    grid-column: 1 / span 8;
  }
`
export const FooterContent = styled.div`
  grid-column: 2 / 14;

  @media ${props => props.theme.breakpoints.tablet} {
    grid-column: 2 / span 6;
  }

  @media ${props => props.theme.breakpoints.mobile} {
    grid-column: 2 / span 6;
  }
`
