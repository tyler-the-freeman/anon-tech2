/** @jsx jsx */
import { jsx } from "theme-ui"

let moveTo = (xy) => "M " + xy[0] + " " + xy[1] + "\n";
let corner = (xy, r, angle) =>
  "A " + r + " " + r + " " + angle + " 0 1 " + xy[0] + " " + xy[1] + "\n";
let lineTo = (xy) => "L " + xy[0] + " " + xy[1] + "\n";

export default function Employee(props) {
  let maxRad = "maxRad" in props ? props["maxRad"] : 8;
  let midRad = "midRad" in props ? props["midRad"] : 6;
  let color = "color" in props ? props["color"] : "red";
  let bg = "bg" in props ? props["bg"] : "black";

  let width = Math.round(props["w"] + 2 * maxRad);
  let height = Math.round(props["h"] + 2 * maxRad);

  let outerCorners = [
    [props["w"], 0], // upper right, right
    [props["w"] + midRad, props["h"]], // lower right, pre corner
    [props["w"], props["h"] + midRad], // lower right, post corner
    [0, props["h"] + maxRad], // lower left, pre corner
    [-maxRad, props["h"]], // lower left, post corner
    [-midRad, 0], // upper left, pre corner
    [0, -midRad], // upper left, post corner
    [props["w"], 0]
  ];
  let innerCorners = [
    [props["w"], 0], // upper right
    [props["w"] - midRad, props["h"] - midRad], // lower right
    [maxRad, props["h"] - maxRad], // lower left
    [midRad, midRad] // upper left
  ];

  let d =
    moveTo(outerCorners[0]) +
    lineTo(outerCorners[1]) +
    corner(outerCorners[2], midRad, 270) +
    lineTo(outerCorners[3]) +
    corner(outerCorners[4], maxRad, 90) +
    lineTo(outerCorners[5]) +
    corner(outerCorners[6], midRad, 90) +
    lineTo(outerCorners[7]) +
    lineTo(innerCorners[3]) +
    lineTo(innerCorners[2]) +
    lineTo(innerCorners[1]) +
    lineTo(innerCorners[0]) +
    "Z";

  return (
    <svg
      width={width}
      height={height}
      viewBox={"" + -maxRad + " " + -maxRad + " " + width + " " + height}
      xmlns="http://www.w3.org/2000/svg"
      className="Card"
    >
      
        <text
          transform="translate(15 35)"
          fontSize={28}
          fill="#fff"
          fontFamily="BebasNeue-Regular, Bebas Neue"
        >
          {props.title}
        </text>
        <text
          transform="translate(15 65)"
          fontSize={10}
          fill="#fff"
          fontFamily="DIN-Regular, DIN"
        >
          {props.itemOne}
          <tspan x={0} y={20}>
            {props.itemTwo}
          </tspan>
          <tspan x={0} y={40}>
            {props.itemThree}
          </tspan>
        </text>
      <g 
        className="CardFrame"
        sx={{
          ':hover': {
            fill: '#00ffe5',
          },
        }}
        fill = {color}
      >
        <rect
        width={props["w"]}
        height={props["h"]}
        fill="#00000000"
        />
        <path d={d}/>
      </g>
    </svg>
  );
}

Employee.defaultProps = {
  title: 'Title',
  itemOne: 'Item One',
  itemTwo: 'Item Two',
  itemThree: 'Item Three',
}