/** @jsx jsx */
import { Image, jsx } from "theme-ui"
import Frame from "../../elements/wireframes/Frame"
import src from "../../images/contact-nelson.jpg"
import ContactBox from "../contact/ContactBox"

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
  // console.log("useSize running");
  return size
}

const ContactFooter = () => {

  const barDiv = React.useRef(null);
  const bar = useSize(barDiv);
  let barW = Math.round(bar?.width);
  let barH = Math.round(bar?.height);

  return(
    <React.Fragment>
    <div
    ref={barDiv}
    sx={{
      position: `relative`,
      bottom: `-10px`,
      width: `100vw`,
      zIndex: `50`,
    }}>
      <Line
        width={barW}
        point={8}
        // flip={false}
        color="#00ffe5"
        />
  </div>
  <Frame
    className="contact-footer"
    backgroundImage={src}
  >
    <div
      sx={{
        justifyContent: `center`,
        display: `flex`,
        // backgroundColor: `red`,
        width: `100vw`,
        // height: `100vh`,
        alignItems: `center`,
        // overflow: `auto`,
        margin: `auto`,
      }}
    >
      <ContactBox />
    </div>
  </Frame>
  </React.Fragment>
)}
                                                                                                                                                                 
export default ContactFooter
