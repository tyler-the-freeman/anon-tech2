/** @jsx jsx */
import { Themed, jsx } from "theme-ui"
import * as React from "react"
import { createRef, useState, useEffect } from 'react'
import { Link } from "gatsby"
import useResizeObserver from '@react-hook/resize-observer'
import SemiResponsiveImage from "../../elements/ornament/SemiResponsiveImage"
import Lines from "../../elements/ornament/Lines"
import { hideMobile, hideDesktop } from "../../styles/utils"
// @ts-ignore
import BodyMDX from "../../mdx/home/one/body"
// @ts-ignore
import src from "../../images/team-photo.png"
// import src from "../../images/playground-feature.jpg"

const useSize = (target) => {
  // Dimensions: {Math.round(size?.width)}w {Math.round(size?.height)}h
  const [size, setSize] = React.useState()

  React.useLayoutEffect(() => {
    setSize(target.current.getBoundingClientRect())
  }, [target])

  // Where the magic happens
  useResizeObserver(target, (entry) => setSize(entry.contentRect))
//  console.log("useSize running");
  return size
}

function Who() {
  // const imageDiv = React.useRef(null);
  // const image = useSize(imageDiv);
  // let imageW = Math.round(image?.width);
  // let imageH = Math.round(image?.height);

  const bodyDiv = React.useRef(null);
  const body = useSize(bodyDiv);
  let bodyW = Math.round(body?.width);
  let bodyH = Math.round(body?.height);

  return(
  <div
    sx={{
      display: `flex`,
      flexDirection: [`column`, `column`, `column`, `column`, `row`],
      // backgroundColor: 'blue',
      alignItems: `center`,
      width: [`90%`, `90%`, `90%`, `90%`, `90%`],
      height: [`auto`, `auto`, `auto`, `auto`, `auto`],
      margin: `auto`
    }}
  >
    <div
    ref={bodyDiv}
    sx={{
      display: `flex`,
      width: [`auto`, `auto`, `auto`, `auto`, `550px`],
      flexDirection: `column`,
      height: `100%`,
      // height: `500px`,
      margin: `auto`,
      mr:[`0px`, `0px`,  `0px`,  `40px`,  `40px`],
      paddingBottom: `10px`,
      // backgroundColor: `red`,
    }}>
      <div>
        <Themed.h1>
          WHO WE ARE
        </Themed.h1>
        {/* desktop-underline */}
        <div
          sx={{
            position: `relative`,
            width: `100%`,
            height: `10px`,
            margin: `auto`,
            paddingLeft: `10px`,
            display: hideMobile,
          }}
        >
          <Lines 
            type="right" 
            width={390} 
            color="white" 
          />
        </div>
        {/* mobile-underline */}
        <div
          sx={{
            position: `relative`,
            width: `100%`,
            height: `10px`,
            margin: `auto`,
            paddingLeft: `5px`,
            paddingTop: `5px`,
            display: hideDesktop,
          }}
        >
          <Lines 
            type="right" 
            width={200} 
            color="white" 
          />
        </div>
        <BodyMDX/>
        <Link
        to='/about'>
        <Themed.h6 style={{
            marginBottom: `0`,
            color: `#00ffe5`,
            float: `right`,
        }}>
            Meet our team
        </Themed.h6>
        </Link>
      </div>
    </div>
    <br/>
    <div
    sx={{
      position: `relative`,
      width: [`90vw`, `90vw`, `90vw`, `90vw`, `650px`],
      height:  `auto`,
      justifyContent: `center`,
      // backgroundColor: `red`,
      margin: `auto`,
    }}>
      <SemiResponsiveImage
        href={src}
        w={1200}
        h={bodyH*2}
        maxRad={6}
        midRad={5}
        color="#00ffe5"
        preserve="xMidYMid slice"
      />
    </div>
    
  </div>
  
)}

export default Who
