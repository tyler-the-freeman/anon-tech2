/** @jsx jsx */
import { Themed, jsx } from "theme-ui"
import * as React from "react"
import { createRef, useState, useEffect } from 'react'
import { Link } from "gatsby"
import useResizeObserver from '@react-hook/resize-observer'
import SemiResponsiveImage from "../../elements/ornament/SemiResponsiveImage"
import Line from "../../elements/ornament/Line"
import { hideMobile, hideDesktop } from "../../styles/utils"
// @ts-ignore
import src from "../../images/camera-image.jpg"
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

  @media screen and (max-width: 1200px) {
    flex-direction: column;
  }
`;

const Left = styled.div`
  display: flex;
  width : 550px;
  flex-direction: column;
  height: 100%;
  margin: auto;
  margin-right: 40px;
  
  @media screen and (max-width: 1200px) {
    width: 100%;
    margin-right: 40px;
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

function Cameras() {
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

  return(
  <AdaptiveFrame
  viewHeight="80vh">
  <Section>
    <Left
    ref={bodyDiv}
    >
        <Title>
          <div
          ref={titleDiv}>
          <h1 className="title"
          // ref={titleDiv}
          >
            Security Cameras
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
        Smart Pro Technologies specialize with surveillance solutions for commercial, residential, schools, and municipalities. Our Team of security experts will work with you on designing, installing, and configuring a system you can trust. We will work in new construction or existing environments. Our teams can install in the most complicated and challenging environments to ensure it is completed professionally. Smart Pro Technologies supports all the major brands from Asia, Europe and the USA. Our commitment is to deliver excellence, with quality and unparalleled customer experience
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
  </Section>
  </AdaptiveFrame>
)}

export default Cameras
