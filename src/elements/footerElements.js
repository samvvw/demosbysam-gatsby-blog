import styled from "styled-components"

export const FooterWrapper = styled.footer`
  grid-column: 1 / span 14;
  grid-row: 3 / 4;
  background-color: ${props => props.theme.palette.surface.dark1};
  display: flex;
`
