/** @jsx jsx */
import { jsx } from "theme-ui"

let moveTo = (xy) => "M " + xy[0] + " " + xy[1] + "\n";
let lineTo = (xy) => "L " + xy[0] + " " + xy[1] + "\n";

// width: Number
// point: Number
// flip: Boolean
// color: String

function Line(props) {
  let d = ""
  if(props.flip) {
    d = 
    moveTo([props.width, 0])+
    lineTo([props.width, props.point])+
    lineTo([0, (props.point/2)])+
    lineTo([props.width, 0])+
    "Z";
  } else {
    d = 
    moveTo([0, 0])+
    lineTo([0, props.point])+
    lineTo([props.width, (props.point/2)])+
    lineTo([0, 0])+
    "Z";
  }

  return (
    <svg
      width={props.width}
      height={props.point}
      viewBox={"" + 0 + " " + 0 + " " + props.width + " " + props.point}
      xmlns="http://www.w3.org/2000/svg"
      className="Line"
    >
    {/* <rect
        width={props.width}
        height={props.point}
        fill="orange"
      /> */}
          <path fill = {props.color} d={d}/>
    </svg>
  );
}

export default Line