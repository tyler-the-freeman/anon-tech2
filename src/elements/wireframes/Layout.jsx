import * as React from "react"
import { Global } from "@emotion/react"
import "./Layout.css"


const Layout = (props) => (
  <React.Fragment>
    <Global
      styles={(theme) => ({
        // backgroundColor: `white`,
        'html': {
          fontFamily: theme.fonts.heading,
        },
        'p': {
          fontFamily: theme.fonts.body,
        },
        'input': {
          fontFamily: theme.fonts.body,
        },
        "::selection": {
          backgroundColor: `white`,
          color: `black`,
        },
      })}
    />
    <main className={props.className}>{props.children}</main>
  </React.Fragment>
)

export default Layout
