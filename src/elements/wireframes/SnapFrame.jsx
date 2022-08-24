/** @jsx jsx */
import { jsx } from "theme-ui"

const SnapFrame = (props) => {

  // let num = props.elements*100
  // var n = num.toString();
  // console.log("LETS GET WERID: ", n);
  // var height = n.concat("vh");
  // console.log("LETS GET WERIDER: ", height);

  return (
  <section
    sx={{
      display: `flex`,
      // alignItems: `center`,
      height: `100vh`,
      width: `100vw`
    }}
    className={props.className}
  >
    {props.children}
  </section>
)}

export default SnapFrame
