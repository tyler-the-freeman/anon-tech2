/** @jsx jsx */
import { jsx } from "theme-ui"
import * as React from "react"
import { createRef, useState, useEffect } from 'react'
import Line from "../../elements/ornament/Line"

import useResizeObserver from '@react-hook/resize-observer'

const useSize = (target) => {
  const [size, setSize] = React.useState()

  React.useLayoutEffect(() => {
    setSize(target.current.getBoundingClientRect())
  }, [target])

  // Where the magic happens
  useResizeObserver(target, (entry) => setSize(entry.contentRect))
//  console.log("useSize running");
  return size
}

const Frame = ({ children, className = ``, viewHeight = `100vh`, backgroundImage,}) => {
  const barDiv = React.useRef(null);
  const bar = useSize(barDiv);
  let barW = Math.round(bar?.width);
  let barH = Math.round(bar?.height)+100;

  return(
  <React.Fragment>
  <div
  ref={barDiv}
    sx={{
      display: `flex`,
      // alignItems: `center`,
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: `cover`,
      // backgroundColor: `green`,
      height: viewHeight,
      zIndex: 0,
      width: `100vw`
    }}
    className={className}
  >
    {children}
  </div>
  </React.Fragment>
)}

export default Frame
