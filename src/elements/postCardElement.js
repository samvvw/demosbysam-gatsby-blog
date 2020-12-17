import styled from "styled-components"

export const PostCardWrapper = styled.div`
  width: 100%;
  display: flex;
  margin: 2rem 0;
  padding: 1rem;
  flex-direction: column;
  border: ${props => props.theme.palette.surface.dark2} 1px solid;
  border-radius: 4px;

  & > * {
    margin-bottom: 2rem;
  }

  @media ${props => props.theme.breakpoints.tablet} {
  }

  @media ${props => props.theme.breakpoints.mobile} {
  }
`
