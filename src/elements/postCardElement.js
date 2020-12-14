import styled from "styled-components"

export const PostCardWrapper = styled.div`
  width: 100%;
  display: flex;

  & > * {
    margin: 2rem;
  }

  @media ${props => props.theme.breakpoints.tablet} {
    flex-direction: column;
  }

  @media ${props => props.theme.breakpoints.mobile} {
  }
`
