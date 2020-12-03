import React from "react"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import Theme from "./src/theme/theme"

const GlobalSyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    ${"" /* border: red solid 1px !important; */}
  }
  body,
  html {
    font-family: ${props => props.theme.fonts.main};
    height: 100%;
    background-color: ${props => props.theme.palette.surface.light2};
  }
`

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={Theme}>
    <GlobalSyles />
    {element}
  </ThemeProvider>
)
