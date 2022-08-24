/** @jsx jsx */
import { Image, Themed, jsx } from "theme-ui"
import * as React from "react"
import { createRef, useState, useEffect } from 'react'
import { Link } from "gatsby"
import Frame from "../../../elements/wireframes/Frame"
import Line from "../../../elements/ornament/Line"
import src from "../../../images/services-hero.jpg"

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

  const itemDiv = React.useRef(null);
  const item = useSize(itemDiv);
  let itemW = Math.round(item?.width);
  let itemH = Math.round(item?.height);
  
  const itemMobileDiv = React.useRef(null);
  const itemMobile = useSize(itemMobileDiv);
  let itemMobileW = Math.round(itemMobile?.width);
  let itemMobileH = Math.round(itemMobile?.height);

  return(
    <Frame header="none" className="about-hero" viewHeight="65vh">
      <div
      style={{
        display: `flex`,
        flexDirection: `column`,
        // backgroundColor: `blue`,
        height: `65vh`,
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
        height: `65vh`,
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
        <SubNav>
          <div className="item-1">
            <Go
              to='/security/services'
            >
              <h1 className="subMobile"
                style={{
                  color: `#00ffe5`,
                  filter: `drop-shadow(0 0 0.75rem #00ffe5)`,
                }}
              >
                SERVICES
              </h1>
            </Go>
            <div className="underline"
              ref={itemDiv}
            >
              <Line
                width={itemW}
                point={5}
                flip={false}
                color="#00ffe5"
              />
            </div>
          </div>
          <div className="item-2">
          <Go
          to='/security/reviews'>
            <h1 className="subMobile"
            style={{
            }}>
              REVIEWS
            </h1>
          </Go>
          </div>
        </SubNav>
          <Themed.h1
          sx={{
            position: [`static`, `static`, `static`, `static`, `absolute`],
            width: `100%`,
            // backgroundColor: `red`,
            margin: `auto`,
            textAlign: [`center`, `center`, `center`, `left`, `left`]
          }}>
            SECURITY
          </Themed.h1>
          <div 
          sx={{
            height: `30px`
          }}/>
          <Go
          to='/contact'>
            <Themed.h4
            sx={{
              position: [`static`, `static`, `static`, `static`, `absolute`],
              width: `100%`,
              // width: [`auto`, `auto`, `auto`, `auto`, `100%`],
              // backgroundColor: `yellow`,
              textAlign: [`center`, `center`, `center`, `right`, `right`]
              // right: `0`,
            }}>MAKE AN APPOINTMENT
            </Themed.h4>
          </Go>
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
        
        <MobileSubNav>
          <div className="item-1">
            <Go
              to='/security/services'
            >
              <h1 className="subMobile"
                style={{
                  color: `#00ffe5`,
                  filter: `drop-shadow(0 0 0.75rem #00ffe5)`,
                }}
              >
                SERVICES
              </h1>
            </Go>
            <div className="underline"
              ref={itemMobileDiv}
            >
              <Line
                width={itemMobileW}
                point={5}
                flip={false}
                color="#00ffe5"
              />
            </div>
          </div>
          <div className="item-2">
          <Go
          to='/security/reviews'>
            <h1 className="subMobile"
            style={{
            }}>
              REVIEWS
            </h1>
          </Go>
          </div>
        </MobileSubNav>
      </div>
    </Frame>
)}

export default Hero