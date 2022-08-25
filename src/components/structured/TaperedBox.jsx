/** @jsx jsx */
import { jsx } from "theme-ui"
import * as React from "react"
import { createRef, useState, useEffect } from 'react'
import useResizeObserver from '@react-hook/resize-observer'

import styled from "styled-components"

const useSize = (target) => {
  const [size, setSize] = React.useState()

  React.useLayoutEffect(() => {
    setSize(target.current.getBoundingClientRect())
  }, [target])

  // Where the magic happens
  useResizeObserver(target, (entry) => setSize(entry.contentRect))
  // console.log("useSize running");
  return size
}

const Content = styled.div`
  width: ${props => props.w};
  display: flex;
  flex-direction: column;
  padding: 15px;
  z-index: 300;
  position: absolute;
  top: 0px;
  background-color: red;

  h1 {
    font-size: 40pt;
    margin-top: auto;
    margin-bottom: auto;

    width: ${props => props.w};
  }

  p {
    font-size: 14pt;
    margin-top: auto;
    margin-bottom: auto;

    width: ${props => props.w};
  }
`;

let moveTo = (xy) => "M " + xy[0] + " " + xy[1] + "\n";
let corner = (xy, r, angle) =>
  "A " + r + " " + r + " " + angle + " 0 1 " + xy[0] + " " + xy[1] + "\n";
let lineTo = (xy) => "L " + xy[0] + " " + xy[1] + "\n";

export default function Card(props) {
  // const contentDiv = React.useRef(null);
  // const content = useSize(contentDiv);
  // let contentW = Math.round(content?.width);
  // let contentH = Math.round(content?.height);

  let maxRad = "maxRad" in props ? props["maxRad"] : 8;
  let midRad = "midRad" in props ? props["midRad"] : 6;
  let color = "color" in props ? props["color"] : "red";
  let bg = "bg" in props ? props["bg"] : "black";

  let width = Math.round(props["w"] + 2 * maxRad);
  let height = Math.round(props["h"] + 2 * maxRad);
  // var numWidth = (width-20).toString();
  // var numHeight = (height-20).toString();
  // var stringWidth = numWidth.concat("px");
  // var stringHeight = numHeight.concat("px");

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
    <>
    <svg
      width={width}
      height={height}
      viewBox={"" + -maxRad + " " + -maxRad + " " + width + " " + height}
      xmlns="http://www.w3.org/2000/svg"
      className="Card"
    >
      <g 
        className="CardFrame"
        // sx={{
        //   ':hover': {
        //     fill: '#00ffe5',
        //   },
        // }}
        fill = {color}
      >
        <rect
        width={props.w}
        height={props.h}
        fill="#00000000"
        />
        <path d={d}/>
      </g>
    </svg>
    </>
  );
}