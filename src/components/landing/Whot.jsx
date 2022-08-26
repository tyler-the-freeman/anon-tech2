/** @jsx jsx */
import { Themed, jsx } from "theme-ui"
import * as React from "react"
import { createRef, useState, useEffect } from 'react'
import { Link } from "gatsby"
import useResizeObserver from '@react-hook/resize-observer'
import SemiResponsiveImage2 from "../../elements/ornament/SemiResponsiveImage2"
import Lines from "../../elements/ornament/Lines"
import { hideMobile, hideDesktop } from "../../styles/utils"
// @ts-ignore
import BodyMDX from "../../mdx/home/two/body"
// @ts-ignore
import src from "../../images/what-general.jpg"
// import src from "../../images/playground-feature.jpg"
import Box from "../../elements/ornament/Box"
import Card from "../home/Card"
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

function Whot() {

  const bodyDiv = React.useRef(null);
  const body = useSize(bodyDiv);
  let bodyW = Math.round(body?.width);
  let bodyH = Math.round(body?.height);

  const blockDiv = React.useRef(null);
  const block = useSize(blockDiv);
  let blockW = Math.round(block?.width);
  let blockH = Math.round(block?.height);

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
    sx={{
      position: `relative`,
      display: [`none`, `none`, `none`, `none`, `block`],
      width: [`90vw`, `90vw`, `90vw`, `90vw`, `650px`],
      height:  `auto`,
      justifyContent: `center`,
      // backgroundColor: `red`,
      margin: `auto`,
    }}>
      <SemiResponsiveImage2
        className="image1"
        href={src}
        w={1100}
        h={bodyH*2}
        maxRad={6}
        midRad={5}
        color="#00ffe5"
        preserve="xMidYMid slice"
      />
    </div>

    {/* <br/> */}

    <div
    ref={bodyDiv}
    sx={{
      display: `flex`,
      width: [`auto`, `auto`, `auto`, `auto`, `40%`],
      flexDirection: `column`,
      height: `100%`,
      // height: `500px`,
      margin: `auto`,
      ml:[`0px`, `0px`,  `0px`,  `30px`,  `30px`],
      paddingBottom: `10px`,
      // backgroundColor: `red`,
    }}>
      <div 
    ref={blockDiv}
    sx={{
      display: `flex`,
      width: [`90vw`, `90vw`, `auto`, `auto`, `100%`],
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
          to='/security/services'>
            <Card
              w={blockW/3.5}
              h={120}
              maxRad={3}
              midRad={2}
              color="white"
              title="Security"
              itemOne="Security Cameras"
              itemTwo="Door Access"
              itemThree="Cabling Solutions"
            />
            </StyledLink>
          </Option>
          <Option>
          <StyledLink
          to='/technology/managed-it'>
            <Card
              w={blockW/3.5}
              h={120}
              maxRad={3}
              midRad={2}
              color="white"
              title="Technology"
              itemOne="Quality Support"
              itemTwo="Trusted Service"
              itemThree="Cloud Services"
            />
            </StyledLink>
          </Option>
          <Option>
          <StyledLink
          to='/c-suite'>
            <Card
              w={blockW/3.5}
              h={120}
              maxRad={3}
              midRad={2}
              color="white"
              title="C-Suite"
              itemOne="Alarms"
              itemTwo="Network & Wifi"
              itemThree="Full Service"
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
          to='/security/services'>
            <Card
              w={blockW/1.5}
              h={120}
              maxRad={3}
              midRad={2}
              color="white"
              title="Security"
              itemOne="Security Cameras"
              itemTwo="Door Access"
              itemThree="Cabling Solutions"
            />
            </StyledLink>
          </Option>
          
          
          <Option>
          <StyledLink
          to='/technology/managed-it'>
            <Card
              w={blockW/1.5}
              h={120}
              maxRad={3}
              midRad={2}
              color="white"
              title="Technology"
              itemOne="Quality Support"
              itemTwo="Trusted Service"
              itemThree="Cloud Services"
            />
            </StyledLink>
          </Option>
          
          <Option>
          <StyledLink
          to='/c-suite'>
            <Card
              w={blockW/1.5}
              h={120}
              maxRad={3}
              midRad={2}
              color="white"
              title="C-Suite"
              itemOne="Alarms"
              itemTwo="Network and Wifi"
              itemThree="Full Service"
            />
            </StyledLink>
          </Option>
          
        </div>
      </div>
    </div>
    {/* <div>
        <Themed.h1>
          WHO WE ARE
        </Themed.h1>
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
    </div> */}
    </div>
  </div>
)}

export default Whot
