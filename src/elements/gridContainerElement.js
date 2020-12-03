import styled from "styled-components"

export const GridWrapper = styled.main`
  height: 100%;
  display: grid;
  grid-template-columns: 1fr repeat(12, minmax(auto, 4.2rem)) 1fr;
  grid-template-rows: ${props => props.theme.nav.height} auto 8rem;
  gap: 0 2rem;
`
