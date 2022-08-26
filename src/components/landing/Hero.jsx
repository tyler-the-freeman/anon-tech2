/** @jsx jsx */
import { Image, jsx } from "theme-ui"
import * as React from "react"
import { createRef, useState, useEffect } from 'react'
import Frame from "../../elements/wireframes/Frame"
import Icons from "../../elements/navigation/Icons"
import ContactBox from "../contact/ContactBox"
import NavSection from "./NavSection"
// @ts-ignore
import src from '../../videos/home-hero.mp4';

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

const Hero = () => {
  const barDiv = React.useRef(null);
  const bar = useSize(barDiv);
  let barW = Math.round(bar?.width);
  let barH = Math.round(bar?.height);

  return(
  <Frame
  viewHeight="150vh"
  className="home-hero">
    <div
    style={{
      display: `flex`,
      flexDirection: `column`,
      // backgroundColor: `orange`,
    }}>
    <video playsInline autoPlay loop muted src={src}
      style={{
        display: `flex`,
        // position: `relative`,
        width: `100%`,
        height: `100%`,
        objectFit: `cover`,
        // opacity: `.5`,
        // backgroundColor: `green`,
      }}
    />
    <div
     style={{
      // position: `absolute`,
      justifyContent: `center`,
      display: `flex`,
      // width: `100%`,
      // height: `100%`,
      alignItems: `center`,
      position: `absolute`,
      left: `auto`,
      right: `auto`,
      top: `0`,
      // bottom: `auto`,
      height: `70%`,
      width: `100%`,
      // backgroundColor: `black`,

     }}
    >
      <Icons 
        icon="heroLogo" 
        width={700} 
        color="icon_brightest"
        hiddenMobile
      />
      <Icons
        icon="heroLogo" 
        width={375} 
        color="icon_brightest"
        hiddenDesktop
      />
    </div>
    {/* <NavSection /> */}
    <div
     sx={{
      // position: `absolute`,
      justifyContent: `center`,
      display: [`none`, `flex`, `flex`, `flex`, `flex`],
      // width: `100%`,
      // height: `100%`,
      alignItems: `center`,
      position: `absolute`,
      left: `auto`,
      right: `auto`,
      // top: `auto`,
      bottom: [`-200px`, `-100px`, `-150px`, `0x`, `0`],
      height: `30%`,
      width: `100%`,
      // backgroundColor: `#ee3fff50`,

     }}
    >
      <NavSection />
    </div>
    <div
      ref={barDiv}
      style ={{
        position: `relative`,
        top: `-10px`,
        width: `100vw`,
        zIndex: `50`,
        // backgroundColor: `red`,
      }}>
        <Line
          width={barW}
          point={8}
          flip={true}
          color="#00ffe5"
          />
      </div>
    </div>
  </Frame>
)}

export default Hero
