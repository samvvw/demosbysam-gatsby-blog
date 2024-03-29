import styled from "styled-components"

export const GridWrapper = styled.div`
  height: 100%;
  display: grid;
  /* grid-template-columns: 1fr repeat(12, minmax(auto, 4.2rem)) 1fr; */
  grid-template-rows: ${props => props.theme.nav.height} auto auto;
  gap: 0 2rem;

  background-color: ${props => props.theme.palette.surface.light2};

  @media ${props => props.theme.breakpoints.tablet} {
    grid-template-columns: 1rem repeat(6, 1fr) 1rem;
    grid-gap: 0 1rem;
  }

  @media ${props => props.theme.breakpoints.mobile} {
    grid-template-columns: 1rem repeat(6, 1fr) 1rem;
  }
`
