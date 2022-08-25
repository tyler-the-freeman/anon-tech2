/** @jsx jsx */
import { Image, Themed, jsx } from "theme-ui"
import * as React from "react"
import { createRef, useState, useEffect } from 'react'
import { Link } from "gatsby"
import Frame from "../../elements/wireframes/Frame"
import Line from "../../elements/ornament/Line"
import src from "../../images/services-hero.jpg"

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

const Go = styled(Link)`
    text-decoration: none;
    color: white;
`;

const SubNav = styled.div`
  display: flex;
  flex-direction: row;
  width: 320px;
  justify-content: left;

  @media screen and (max-width: 900px) {
    display: none;
  }

  .item-1 {
    margin-right: auto;
    margin: 
  }

  .item-2 {
    margin-right: auto;
  }

  .underline {
    display: flex;
    width: 120px;
    align-items: start;
  }

  h1 {
    margin-top: auto;
    margin-bottom: auto;
    margin-right: 30px;
    font-size: 30pt;
    margin: auto
    text-align: left;
    width: auto;

    &:hover {
      filter: drop-shadow(0 0 0.75rem #00ffe5);
      color: #00ffe5;
    }
  }
`;

const MobileSubNav = styled.div`
  display: none;
  width: 85vw;
  margin: auto;
  justify-content: center;
  margin-top: 25px;
  margin-bottom: 25px;

  @media screen and (max-width: 900px) {
    display: flex;
  }

  .item-1 {
    margin-left: auto;
    margin-right: auto;
    margin: 
  }

  .item-2 {
    margin-left: auto;
    margin-right: auto;
  }

  .underline {
    display: flex;
    width: 22.7vw;
    align-items: start;
  }

  h1 {
    margin-top: auto;
    margin-bottom: auto;
    font-size: 8vw;

    &:hover {
      filter: drop-shadow(0 0 0.75rem #00ffe5);
      color: #00ffe5;
    }
  }
`;

const Hero = () => {
  const barDiv = React.useRef(null);
  const bar = useSize(barDiv);
  let barW = Math.round(bar?.width);
  let barH = Math.round(bar?.height);
  return(
    <Frame header="none" className="about-hero" viewHeight="40vh">
      <div
      style={{
        display: `flex`,
        flexDirection: `column`,
        // backgroundColor: `blue`,
        height: `40vh`,
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
        height: `40vh`,
        // backgroundColor: `orange`,
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
            textAlign: [`center`, `center`, `center`, `left`, `left`]
          }}>
            MACE KS
          </Themed.h1>
          <div 
          sx={{
            height: `30px`
          }}/>
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
      </div>
    </Frame>
)}

export default Hero