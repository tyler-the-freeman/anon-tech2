/** @jsx jsx */
import { Image, Themed, jsx } from "theme-ui"
import * as React from "react"
import { createRef, useState, useEffect } from 'react'
import Frame from "../../elements/wireframes/Frame"
import Line from "../../elements/ornament/Line"
import src from "../../images/meet-hero.jpg"
import BodyMDX from "./body.mdx"
import { StaticImage } from "gatsby-plugin-image"

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

const Hero = () => {
  const barDiv = React.useRef(null);
  const bar = useSize(barDiv);
  let barW = Math.round(bar?.width);
  let barH = Math.round(bar?.height);

  return(
    <Frame header="none" className="about-hero" viewHeight="80vh">
      <div
      sx={{
        display: `flex`,
        flexDirection: `column`,
      }}>
      <div
      sx={{
        display: `flex`,
        // position: `absolute`,
        backgroundImage: `url(${src})`,
        backgroundSize: `cover`,
        backgroundPosition: `center`,
        backgroundOrigin: `padding-box`,
        backgroundRepeat: `no-repeat`,
        width: `100vw`,
        height: `60vh`,
        // top: `0`,
      }}>
        <div
        sx={{
          position: `relative`,
          // top: [`40vh`, `40vh`, `40vh`, `36vh`, `47vh`],
          top: [`25%`, `25%`, `25%`, `25%`, `25%`],
          left:  `0`,
          right: `0`,
          width: [`90vw`, `92vw`, `90vw`, `90vw`, `85vw`],
          margin: `auto`,
        }}>
          <Themed.h1
          sx={{
            position: [`static`, `static`, `static`, `static`, `absolute`],
            width: `100%`,
            // backgroundColor: `red`,
            margin: `auto`,
            textAlign: [`center`, `center`, `left`, `left`, `left`]
          }}>
            Meet our team
          </Themed.h1>
          <div 
          sx={{
            height: `30px`
          }}/>
          <Themed.h4
          sx={{
            position: [`static`, `static`, `static`, `static`, `absolute`],
            width: `100%`,
            // width: [`auto`, `auto`, `auto`, `auto`, `100%`],
            // backgroundColor: `yellow`,
            textAlign: [`center`, `center`, `right`, `right`, `right`]
            // right: `0`,
          }}>A diverse talent group
          </Themed.h4>
        </div>
      </div>
      <div
      ref={barDiv}
      style={{
        position: `relative`,
        top: `-10px`,
        width: `100vw`,
        // backgroundColor: `red`,
        zIndex: `50`,
      }}>
        <Line
          width={barW}
          point={8}
          flip={true}
          color="#00ffe5"
          />
      </div>
      <div
        sx={{
          position: `relative`,
          // left: `0`,
          // right: `0`,
          margin: `auto`,
          // backgroundColor: `orange`,
          width: [`80vw`, `80vw`, `80vw`, `80vw`, `80vw`],
          // height: `50%`,
        }}>
          <BodyMDX />
        </div>
      </div>
    </Frame>
)}

export default Hero