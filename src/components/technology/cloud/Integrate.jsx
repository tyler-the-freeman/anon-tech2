/** @jsx jsx */
import { Themed, jsx } from "theme-ui"
import * as React from "react"
import { createRef, useState, useEffect } from 'react'
import { Link } from "gatsby"
import useResizeObserver from '@react-hook/resize-observer'
import SemiResponsiveImage from "../../../elements/ornament/SemiResponsiveImage"
import Line from "../../../elements/ornament/Line"
import { hideMobile, hideDesktop } from "../../../styles/utils"
// @ts-ignore
import src from "../../../images/camera-image.jpg"
import AdaptiveFrame from "../../../elements/wireframes/AdaptiveFrame"
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
  width : 700px;
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

function Integrate() {
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
  viewHeight="100vh">
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
            MIGRATE & INTEGRATE
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
        The cloud is more than just a storage service. Whenever you make the jump to the cloud, no matter the type, your office will see a growth in your mobility and ease of access. When it comes to security, cloud managed services are among the most secure in the world. It is like putting your cash in a bank vault, security is best handled by experts in the industry.
        </Themed.p>
        <Themed.p>
        Every cloud infrastructure comes with several advantages, but the public cloud has particular benefits of its own. Smart Pro Technologies will connect you with third-party vendors with big data centers that are supported by nationwide networks and redundant servers to support your data in case of an outage.
        </Themed.p>
    </Left>
    <br/>
    <div
    ref={imageDiv}
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
        w={imageW}
        h={bodyH}
        maxRad={4}
        midRad={3}
        color="#00ffe5"
        preserve="xMidYMid slice"
      />
    </div>
  </Section>
  </AdaptiveFrame>
)}

export default Integrate
