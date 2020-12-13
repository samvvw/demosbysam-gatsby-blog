import React from "react"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import Theme from "./src/theme/theme"
import { MDXProvider } from "@mdx-js/react"
import { Table } from "./src/components/Table"
import { preToCodeBlock } from "mdx-utils"
import "./language-tabs.css"
import { Code } from "./src/components/Code"

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
    background-color: ${props => props.theme.palette.surface.light1};
  }
`

const components = {
  table: Table,
  pre: preProps => {
    const props = preToCodeBlock(preProps)
    if (props) {
      return <Code {...props} />
    }
    return <pre {...preProps} />
  },
  wrapper: ({ children }) => <>{children}</>,
}

export const wrapRootElement = ({ element }) => (
  <MDXProvider components={components}>
    <ThemeProvider theme={Theme}>
      <GlobalSyles />
      {element}
    </ThemeProvider>
  </MDXProvider>
)
