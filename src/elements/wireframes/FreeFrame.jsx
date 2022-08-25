/** @jsx jsx */
import { jsx } from "theme-ui"

const FreeFrame = ({ children, className = ``, viewHeight = `100vh`}) => (
  <section
    sx={{
      display: `flex`,
      alignItems: `center`,
      // my: `100px`,
      // backgroundColor: `orange`,
      height: `auto`,
      marginTop: [`25px`, `25px`, `50px`, `50px`, `50px`],
      zIndex: 0,
      width: `100vw`,
      marginBottom: [`25px`, `25px`, `50px`, `50px`, `50px`],
    }}
    className={className}
  >
    {children}
  </section>
)

export default FreeFrame
