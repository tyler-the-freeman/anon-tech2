/** @jsx jsx */
import { useResponsiveValue, useBreakpointIndex, Themed, jsx } from "theme-ui"
// import useWindowDimensions from "../../styles/utils"
import { createRef, useState, useEffect } from 'react'
// import image from "../../images/portraits/.jpg"
import {
  useWindowSize,
  useWindowWidth,
  useWindowHeight,
} from '@react-hook/window-size'

let moveTo = (xy) => "M " + xy[0] + " " + xy[1] + "\n";
let corner = (xy, r, angle) =>
  "A " + r + " " + r + " " + angle + " 0 1 " + xy[0] + " " + xy[1] + "\n";
let lineTo = (xy) => "L " + xy[0] + " " + xy[1] + "\n";



function EmployeeCard ({ children, id, title, link, dim, name, win }) {
  // const window = useWindowDimensions();
  // const isomorphicWindow = typeof window !== 'undefined' ? window;
  // const ResizeObserver = isomorphicWindow.ResizeObserver || Polyfill

  // const window = useWindowDimensions();
  const [w, h] = useWindowSize()

  let container = (w*(.75));
  // const w = useWindowWidth()
  // const h = useWindowHeight()
  // console.log("Prop Passed to MDX: ", win);

  // let container = (w*(.75));
  let size = (container/3.22);
  if(dim) {
    size = (container/2);
  }

  let maxRad = (container*(.005));
  let midRad = (container*(.004));
  // let size = 330;
  let width = Math.round(size + 2 * maxRad);
  let height = Math.round(size + 2 * maxRad);

  let outerCorners = [
    [size, 0], // upper right, right
    [size + midRad, size], // lower right, pre corner
    [size, size + midRad], // lower right, post corner
    [0, size + maxRad], // lower left, pre corner
    [-maxRad, size], // lower left, post corner
    [-midRad, 0], // upper left, pre corner
    [0, -midRad], // upper left, post corner
    [size, 0]
  ];
  let innerCorners = [
    [size, 0], // upper right
    [size - midRad, size - midRad], // lower right
    [maxRad, size - maxRad], // lower left
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
  
  
  let numXOffset = (size*.06)
  if(dim) {
    numXOffset = (size*.04)
  }
  var strXOffset = numXOffset.toString();
  var xOffset = strXOffset.concat("px");

  let numYOffsetTitle = -(size*.99)
  if(dim) {
    numYOffsetTitle = -(size*.995)
  }
  var strYOffsetTitle = numYOffsetTitle.toString();
  var yOffsetTitle = strYOffsetTitle.concat("px");

  let numYOffsetName = -(size*.32)
  if(dim) {
    numYOffsetName = -(size*.201)
  }
  var strYOffsetName = numYOffsetName.toString();
  var yOffsetName = strYOffsetName.concat("px");
  return(
    <div
    style={{
      display: `flex`,
      flexDirection: `column`,
      // WebkitFilter: `grayscale(1)`,
      // backgroundColor: `orange`,
    }}
    >
    <svg
    width={width}
    height={height}
    viewBox={"" + -maxRad + " " + -maxRad + " " + width + " " + height}
    xmlns="http://www.w3.org/2000/svg"
    className={id}
  >
    <g 
      // sx={{
      //   // filter: `grayscale(1)`,
      //   ':hover': {
      //     filter: `grayscale(0)`,
      //     // -webkit-filter: `grayscale(0)`,
      //   },
      //   transition: `all 0.5s ease-in-out`,
      // }}
    >
      <image
      sx={{
        filter: `grayscale(1)`,
        WebkitFilter: `grayscale(1)`,
        ':hover': {
          filter: `grayscale(0)`,
          WebkitFilter: `grayscale(0)`
        },
        transition: `all 0.5s ease-in-out`,
      }}
        href={link}
        width={size}
        height={size}
        // preserveAspectRatio="none"
      />
      <path fill="#00ffe5" d={d}/>
    </g>
  </svg>
  <div
  sx={{
    position: `relative`,
    transform: `translate(${xOffset}, ${yOffsetTitle})`,
  }}>
      <h1
      sx={{
        marginTop: `auto`,
        marginBottom: `auto`,
        fontSize: `2.1vw`,
      }}>
        {title}
      </h1>
  </div>
  <div
  sx={{
    position: `relative`,
    transform: `translate(${xOffset}, ${yOffsetName})`
    // opacity: `${}`
  }}>
      <h1
      sx={{
        marginTop: `auto`,
        marginBottom: `auto`,
        fontSize: `2.8vw`,
      }}>
        {name}
      </h1>
  </div>
  </div>
)}

export default EmployeeCard
