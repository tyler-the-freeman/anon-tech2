/** @jsx jsx */
import { Image, jsx, Themed } from "theme-ui"
import Frame from "../../elements/wireframes/Frame"
import src from "../../images/start-your-project.jpg"

import * as React from "react"
import { createRef, useState, useEffect } from 'react'
import Line from "../../elements/ornament/Line"
import Box from "../../elements/ornament/Box"
import { Link } from "gatsby"

import useResizeObserver from '@react-hook/resize-observer'
import { auto } from "async"
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
   &: hover {
     color: #00ffe5;
   }
`;

const ProjectFooter = () => {
  const barDiv = React.useRef(null);
  const bar = useSize(barDiv);
  let barW = Math.round(bar?.width);
  let barH = Math.round(bar?.height);

  const titleDiv = React.useRef(null);
  const title = useSize(titleDiv);
  let titleW = Math.round(title?.width);
  let titleH = Math.round(title?.height);

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
      style={{
        width: `100%`,
        height: `100%`,
        // backgroundColor: `red`,
        display: `flex`,
        flexDirection: `column`,
        justifyContent: `center`,
        alignItems: `center`,
      }}
    >
        <div
        ref={titleDiv}
        style={{
          position: `relative`,
          // width: `69vw`,
          // backgroundColor: `blue`,
        }}>
          <h1
          sx={{
            display: [`none`, `none`, `none`, `none`, `flex`],
            marginTop: `auto`,
            marginBottom: `auto`,
            fontSize: `8vw`,
            // backgroundColor: `red`,
          }}>
            START YOUR PROJECT TODAY
          </h1>
          <h1
          sx={{
            display: [`flex`, `flex`, `flex`, `flex`, `none`],
            justifyContent: `center`,
            marginTop: `auto`,
            marginBottom: `auto`,
            fontSize: [`38pt`, `55pt`, `80pt`, `80pt`, `60pt`],
            // backgroundColor: `red`,
          }}>
            START YOUR
          </h1>
          <h1
          sx={{
            display: [`flex`, `flex`, `flex`, `flex`, `none`],
            justifyContent: `center`,
            marginTop: `auto`,
            marginBottom: `auto`,
            fontSize: [`38pt`, `55pt`, `80pt`, `80pt`, `60pt`],
            // backgroundColor: `red`,
          }}>
            PROJECT TODAY
          </h1>
        </div>
        <div
          style={{
            marginTop: `-10px`,
          }}>
          <Line
            width={titleW}
            point={8}
            flip={true}
            color="white"
          />
          </div>
        <br />
        <Go
        to='/contact'>
          <div
          style={{
            display: `flex`,
            flexDirection: `column`,
            width: `100%`,
            height: `auto`,
            alignItems: `center`,
            justifyContent: `center`,
          }}>
            <Box
              w={250}
              h={70}
              maxRad={4}
              midRad={3}
              color="#00ffe5"
              bg="#00000070"
            />
            <div
            style={{
              position: `absolute`,
              display: `flex`,
              margin: `auto`,
              width: `auto`,
              height: `auto`,
            }}>
              <h1
              style={{
                marginTop: `auto`,
                marginBottom: `auto`,
                fontSize: `35pt`,
              }}>
                CONTACT US
              </h1>
            </div>
          </div>
        </Go>

        <div>
    </div>
  </div>
  </Frame>
  </React.Fragment>
)}
                                                                                                                                                                 
export default ProjectFooter
