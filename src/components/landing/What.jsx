/** @jsx jsx */
import { Image, Themed, jsx } from "theme-ui"
import * as React from "react"
import useResizeObserver from '@react-hook/resize-observer'
import { createRef, useState, useEffect } from 'react'
import { Link } from "gatsby"
import Box from "../../elements/ornament/Box"
import FullyResponsiveImage from "../../elements/ornament/FullyResponsiveImage"
import Lines from "../../elements/ornament/Lines"
import { hideMobile, hideDesktop } from "../../styles/utils"
import Card from "../home/Card"
import BodyMDX from "../../mdx/home/two/body"
import img from "../../images/playground-feature.jpg"
import styled from "styled-components"

export const StyledLink = styled(Link)`
    width: 100%;
    display: flex;
    margin: auto;
    text-decoration: none;
`

export const Option = styled.div`
    margin: auto;
`

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

function What(props) {
  const imageDiv = React.useRef(null);
  const image = useSize(imageDiv);
  let imageW = Math.round(image?.width);
  let imageH = Math.round(image?.height);

  const blockDiv = React.useRef(null);
  const block = useSize(blockDiv);
  let blockW = Math.round(block?.width);
  let blockH = Math.round(block?.height);



  return(
  <div
    sx={{
      display: `flex`,
      flexDirection: [`column`, `column`, `column`, `column`, `row`],
      // backgroundColor: '#000fff',
      alignItems: `center`,
      width: [`90%`, `90%`, `90%`, `90%`, `80%`],
      height: [`auto`, `auto`, `auto`, `auto`, `auto`],
      margin: `auto`,
      zIndex: `0`,
    }}
    className={props.className}
  >
    {/*  desktop-image */}
    <div
    ref={imageDiv}
    sx={{
      position: `relative`,
      width: [`90vw`, `90vw`, `90vw`, `90vw`, `40%`],
      display: `flex`,
      display: [`none`, `none`, `none`, `none`, `block`],
      alignSelf: `center`,
      // backgroundColor: `brown`,
      alignItems: `center`,
      justifyContent: `center`,
      margin: `auto`,
      zIndex: `100`,
    }}>
      <FullyResponsiveImage
        href={img}
        w={imageW}
        h={blockH}
        maxRad={4}
        midRad={3}
        color="#00ffe5"
        preserve="xMidYMid slice"
      />
    </div>
    {/* Block */}
    <div 
    ref={blockDiv}
    sx={{
      display: `flex`,
      width: [`90vw`, `90vw`, `auto`, `auto`, `700px`],
      flexDirection: `column`,
      alignSelf: `center`,
      height: `100%`,
      // backgroundColor: `#312244`,
      // ml: [`0px`, `0px`, `0px`, `0px`, `40px`],
      margin: `auto`,
      paddingBottom: `10px`,
    }}>
      <div>
        <Themed.h1>
          WHAT WE DO
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
            // width: `500px`,
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
          <div
          sx={{
            paddingBottom: [`10px`, `10px`, `10px`, `10px`, `10px`]
          }}>
          <BodyMDX/>
          </div>
        {/* desktop-cards */}
        <div
        sx={{
          display: [`none`, `none`, `flex`, `flex`, `flex`],
          flexDirection: `row`,
        }}>
          
          <Option>
          <StyledLink
          to='/'>
            <Card
              w={blockW/3.5}
              h={120}
              maxRad={3}
              midRad={2}
              color="white"
              title="blah"
              itemOne="asdfasdf"
              itemTwo="asdfasdf"
              itemThree="asdflajsdflkjasdf"
            />
            </StyledLink>
          </Option>
          <Option>
          <StyledLink
          to='/'>
            <Card
              w={blockW/3.5}
              h={120}
              maxRad={3}
              midRad={2}
              color="white"
              title="blah"
              itemOne="asdfasdf"
              itemTwo="asdfasdf"
              itemThree="asdflajsdflkjasdf"
            />
            </StyledLink>
          </Option>
          <Option>
          <StyledLink
          to='/'>
            <Card
              w={blockW/3.5}
              h={120}
              maxRad={3}
              midRad={2}
              color="white"
              title="blah"
              itemOne="asdfasdf"
              itemTwo="asdfasdf"
              itemThree="asdflajsdflkjasdf"
            />
            </StyledLink>
          </Option>
        </div>
        {/* mobile-cards */}
        <div
        sx={{
          // backgroundColor: `blue`,
          display: [`flex`, `flex`, `none`, `none`, `none`],
          flexDirection: `column`,
          gridGap: `15px`,
        }}>
          
          <Option>
          <StyledLink
          to='/'>
            <Card
              w={blockW/1.5}
              h={120}
              maxRad={3}
              midRad={2}
              color="white"
              title="Security"
              itemOne="Security Cameras"
              itemTwo="Door Access"
              itemThree="Network Cabling Services"
            />
            </StyledLink>
          </Option>
          
          
          <Option>
          <StyledLink
          to='/'>
            <Card
              w={blockW/1.5}
              h={120}
              maxRad={3}
              midRad={2}
              color="white"
              title="Technology"
              itemOne="Quality Support"
              itemTwo="Trusted Service"
              itemThree="Intelligent Cloud Services"
            />
            </StyledLink>
          </Option>
          
          <Option>
          <StyledLink
          to='/'>
            <Card
              w={blockW/1.5}
              h={120}
              maxRad={3}
              midRad={2}
              color="white"
              title="C-Suite"
              itemOne="Alarms"
              itemTwo="Network and Wifi"
              itemThree="Full Service Management"
            />
            </StyledLink>
          </Option>
          
        </div>
      </div>
    </div>
    
  </div>
  )
}

export default What
