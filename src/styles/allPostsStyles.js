import styled from "styled-components"

export const AllPostsWrapper = styled.section`
  grid-column: 2 / 14;

  @media ${props => props.theme.breakpoints.tablet} {
    grid-column: 2 / 8;
  }

  @media ${props => props.theme.breakpoints.mobile} {
    grid-column: 2 / 8;
  }
`
