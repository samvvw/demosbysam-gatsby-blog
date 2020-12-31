import styled from "styled-components"

export const ContainerWrapper = styled.div`
  grid-column: 2 / span 12;
  /* height: 16rem; */
  /* overflow: hidden; */
  min-height: 100vh;
  display: flex;
  flex-direction: ${props => props.flexDirection};
  align-items: ${props => props.alignItems};
  justify-content: ${props => props.justifyContent};

  @media ${props => props.theme.breakpoints.tablet} {
    grid-column: 2 / span 6;
  }

  @media ${props => props.theme.breakpoints.mobile} {
    grid-column: 2 / span 6;
  }
`
