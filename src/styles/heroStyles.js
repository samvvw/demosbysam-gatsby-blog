import styled from "styled-components"

export const HeroWrapper = styled.div`
  grid-column: 1 / span 14;
  position: relative;
  overflow: hidden;
  height: 20rem;
  @media ${props => props.theme.breakpoints.tablet} {
    grid-column: 1 / span 9;
    height: 16rem;
  }

  @media ${props => props.theme.breakpoints.mobile} {
    grid-column: 1 / span 9;
    height: 100vh;
  }
`
export const HeroFilter = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: white;
  opacity: 0.4;
  z-index: 300;
`

export const TechLogosWrapper = styled.div`
  /* border: red solid 1px; */
  transform: translate(-50%, -50%);
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 400;
  width: 100%;
  display: flex;
  height: fit-content;
  align-items: center;
  padding: 1rem 0;
  justify-content: space-around;
  & > img {
    max-width: 6rem;
  }

  @media ${props => props.theme.breakpoints.tablet} {
    height: fit-content;
    /* flex-wrap: wrap-reverse; */
    & > img {
      max-width: 5rem;
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
      max-width: 5rem;
      min-height: 6rem;
    }
  }
`
