/** @jsx jsx */
import { Themed, jsx } from "theme-ui"
import * as React from "react"
import { createRef, useState, useEffect } from 'react'
import { Link } from "gatsby"
import useResizeObserver from '@react-hook/resize-observer'
import SemiResponsiveImage1 from "../../elements/ornament/SemiResponsiveImage1"
import FullyResponsiveImage from "../../elements/ornament/FullyResponsiveImage"
import Line from "../../elements/ornament/Line"
import { hideMobile, hideDesktop } from "../../styles/utils"
// @ts-ignore
import src from "../../images/door-image.jpg"
import AdaptiveFrame from "../../elements/wireframes/AdaptiveFrame"
import styled from "styled-components"

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

const Section = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  width: 90%;
  height: auto;
  margin: auto;
  justify-content: center;

  @media screen and (max-width: 1200px) {
    flex-direction: column;
  }
`;

const Left = styled.div`
  display: flex;
  width: 550px;
  flex-direction: column;
  height: 100%;
  margin-left: 8%;
  
  @media screen and (max-width: 1200px) {
    margin-left: 0px;
    
    width: 100%;
  }
  @media screen and (max-width: 900px) {
    margin-right: 0px;
  }
`;

const Title = styled.div`
  margin-left: 10px;

  div {
    margin-left: 0;

    @media screen and (max-width: 1200px) {
    }

  }
  h1 {
    font-size: 65pt;
    margin-top: 0;
    margin-bottom: -10px;
    width: auto;

    @media screen and (max-width: 900px) {
      font-size: 12vw;
    }
  }
`;

const LineDiv = styled.div`
  position: relative;
  display: flex;
  width: auto;
  margin-top: 5px;

  @media screen and (max-width: 1200px) {
    width: 525px;
  }

  @media screen and (max-width: 900px) {
    width: 80%;
  }
  
`;

function Doors() {
  const bodyDiv = React.useRef(null);
  const body = useSize(bodyDiv);
  let bodyW = Math.round(body?.width);
  let bodyH = Math.round(body?.height);

  const titleDiv = React.useRef(null);
  const title = useSize(titleDiv);
  let titleW = Math.round(title?.width);
  let titleH = Math.round(title?.height);

  const lineDiv = React.useRef(null);
  const line = useSize(lineDiv);
  let lineW = Math.round(line?.width);
  let lineH = Math.round(line?.height);

  const imageDiv = React.useRef(null);
  const image = useSize(imageDiv);
  let imageW = Math.round(image?.width);
  let imageH = Math.round(image?.height);

  return(
  <AdaptiveFrame
  viewHeight="80vh">
  <Section>
    <div
    ref={imageDiv}
    sx={{
      position: `relative`,
      width: [`90vw`, `90vw`, `90vw`, `90vw`, `650px`],
      // width: `80%`,
      // marginRight: `0px`,
      // backgroundColor: `red`,
      display: [`none`, `none`, `none`, `none`, `block`]
    }}>
      <SemiResponsiveImage1
        href={src}
        w={imageW}
        h={bodyH}
        maxRad={4}
        midRad={3}
        color="#00ffe5"
        preserve="xMidYMid slice"
      />
    </div>
    <Left
    ref={bodyDiv}
    >
        <Title>
          <div
          ref={titleDiv}>
          <h1 className="title"
          // ref={titleDiv}
          >
            Door Access
          </h1>
        </div>
        {/* desktop-underline */}
        <LineDiv
        ref={lineDiv}
        >
          <Line 
            flip={false}
            width={lineW} 
            point={titleH/13}
            color="white" 
          />
        </LineDiv>
        </Title>
        <Themed.p>
        This is a live update
        </Themed.p>
        {/* <Link
        to='/about'>
        <Themed.h6 style={{
            marginBottom: `0`,
            color: `#00ffe5`,
            float: `right`,
        }}>
            Vendors
        </Themed.h6>
        </Link> */}
    </Left>
    <br/>
    <div
    sx={{
      position: `relative`,
      width: [`90vw`, `90vw`, `90vw`, `90vw`, `650px`],
      height:  `auto`,
      justifyContent: `center`,
      // backgroundColor: `red`,
      margin: `auto`,
      display: [`block`, `block`, `block`, `block`, `none`]
    }}>
      <SemiResponsiveImage1
        href={src}
        w={1200}
        h={bodyH*2}
        maxRad={6}
        midRad={5}
        color="#00ffe5"
        preserve="xMidYMid slice"
      />
    </div>
  </Section>
  </AdaptiveFrame>
)}

export default Doors
