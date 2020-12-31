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

export const TechLogosWrapper = styled.div`
  /* border: red solid 1px; */
  display: flex;
  height: 14rem;
  align-items: center;
  justify-content: space-around;
  & > img {
    max-width: 6rem;
  }

  @media ${props => props.theme.breakpoints.tablet} {
    height: 15rem;
    /* flex-wrap: wrap-reverse; */
    & > img {
      max-width: 5.5rem;
    }
  }

  @media ${props => props.theme.breakpoints.mobile} {
    /* flex-direction: column;
    flex-wrap: nowrap; */
    margin: 0 auto;
    width: 70%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-content: center;
    justify-items: center;
    height: fit-content;
    & > img {
      max-width: 6rem;
      min-height: 7rem;
    }
  }
`
