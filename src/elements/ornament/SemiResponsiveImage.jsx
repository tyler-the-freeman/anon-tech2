/** @jsx jsx */
import { jsx } from "theme-ui"

let moveTo = (xy) => "M " + xy[0] + " " + xy[1] + "\n";
let corner = (xy, r, angle) =>
  "A " + r + " " + r + " " + angle + " 0 1 " + xy[0] + " " + xy[1] + "\n";
let lineTo = (xy) => "L " + xy[0] + " " + xy[1] + "\n";

function SemiResponsiveimage(props) {
  let maxRad = "maxRad" in props ? props["maxRad"] : 8;
  let midRad = "midRad" in props ? props["midRad"] : 6;
  let color = "color" in props ? props["color"] : "red";

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

    let viewParam = `${-maxRad} ${-maxRad} ${width} ${height}` 
    // console.log(viewParam)
  return (
    <svg
      // width={width}
      // height={height}
      // viewBox={"" + -maxRad + " " + -maxRad + " " + width + " " + height}
      viewBox={viewParam}
      xmlns="http://www.w3.org/2000/svg"
      className="Images"
    >
      <rect
        width={props["w"]}
        height={props["h"]}
        fill="url(#img)"
      />
      <g 
        fill= {color}
        className="ImageFrames">
        <path d={d}/>
      </g>
      <defs>
        <pattern id="img" patternUnits="userSpaceOnUse" width={props["w"]} height={props["h"]}>
          <image href={props["href"]} width={props["w"]} height={props["h"]} x="0" y="0"
          preserveAspectRatio={props["preserve"]}
          />
        </pattern>
      </defs>
    </svg>
  );
}

export default SemiResponsiveimage