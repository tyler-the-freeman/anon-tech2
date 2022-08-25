/** @jsx jsx */
import { jsx } from "theme-ui"
import OwnersMDX from "./owners.mdx"
import EmployeeMDX from "./employee.mdx"
import ImageBox from "../../elements/ornament/ImageBox"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Employees = () => {
  return(
    <div
    sx={{
      display: `flex`,
      flexDirection: [`column`, `column`, `column`, `column`, `column`],
      // backgroundColor: '#000fff',
      alignItems: `center`,
      width: [`90%`, `90%`, `90%`, `90%`, `85%`],
      height: [`auto`, `auto`, `auto`, `auto`, `auto`],
      margin: `auto`,
      zIndex: `0`,
      }}>
    <div
      sx={{
        // margin: `auto`,
        display: `grid`,
        gridGap: [`20px`, `30px`, `50px`, `50px`, `100px`],
        marginBottom: [`20px`, `30px`, `50px`, `50px`, `100px`],
        // gridTemplateColumns: [`1fr`, `1fr`, `repeat( 1, 1fr)`, `repeat( 1, 1fr)`, `repeat( 2, 1fr)`],
        gridTemplateColumns: `repeat(2, 1fr)`,
        h2: { gridColumn: `-1/1`, color: `white !important` },
      }}
    >
      <OwnersMDX/>
    </div>
    <div
      sx={{
        margin: `auto`,
        display: `grid`,
        gridGap: [`20px`, `30px`, `50px`, `50px`, `100px`],
        marginBottom: [`20px`, `30px`, `50px`, `50px`, `100px`],
        gridTemplateColumns: `repeat(3, 1fr)`,
        h2: { gridColumn: `-1/1`, color: `white !important` },
      }}
    >
      <EmployeeMDX/>
    </div>
    </div>
  )}

export default Employees
