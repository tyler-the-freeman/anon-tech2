/** @jsx jsx */
import { Image, Themed, jsx } from "theme-ui"
import * as React from "react"
import { createRef, useState, useEffect } from 'react'
import Line from "../../../elements/ornament/Line"
import Icons from "./Icons"

import useResizeObserver from '@react-hook/resize-observer'

import styled from "styled-components"
import { Link } from "gatsby"
import AdaptiveFrame from "../../../elements/wireframes/AdaptiveFrame"

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

const Section = styled.div`
  display: flex;
  flex-direction: column;
  width: 90vw;
  margin: auto;


  @media screen and (max-width: 900px) {
    height: auto;
  }

  .title {
    margin-left: 10px;
    width: auto;
  }

  .underline {
    width: 550px;

    @media screen and (max-width: 900px) {
      width: 80%;
    }
  }
  
  .body {
    margin-left: 0px;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 900px) {
  }

`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  margin: auto;
  width: 100%;
  margin-bottom: 10px;
  margin-top: 10px;

  @media screen and (max-width: 600px) {
    flex-direction: column;
    margin-bottom: 0px;
    margin-top: 0px;
  }

  .item {
    display: flex;
    flex-direction: column;

    margin-top: 0px;
    margin-left: auto;
    margin-right: auto;
    

  }

  .icon {
    margin: auto;
    width: 100px;
    height: 100px;
  }

  .subDiv {
    margin: auto;
  }

  .subText {
    margin-top: 0px;
    margin-botttom: 0px;
    font-size: 35pt;

    margin-left: auto;
    margin-right: auto;


    @media screen and (max-width: 900px) {
      font-size: 20pt;
    }
  }
`;

const HelpSection = () => {
  const lineDiv = React.useRef(null);
  const line = useSize(lineDiv);
  let lineW = Math.round(line?.width);
  let lineH = Math.round(line?.height);

  return(
    <AdaptiveFrame
    viewHeight="100vh">
      <Section>
        <div className="title"
        id="help">
          <Themed.h1
          sx={{
            ml: `0px`,
          }}>
            Help Desk Support
          </Themed.h1>
          <div className="underline"
          ref={lineDiv}>
            <Line 
              flip={false}
              width={lineW} 
              point={7}
              color="white" 
            />
          </div>
        </div>
        <div className="body">
          <Themed.p>
            Smart Pro Technologies helps organizations ranging from schools to full-stack tech companies by providing a full range of operations and IT services through our remote help desk and support department. The core principle at Smart Pro Technologies is to provide our clients with unmatched customer service and a personalized experience. Get in touch with our expert staff today!
          </Themed.p>
        </div>
        <Content>
          <Row>
            <div className="item">
              <div className="icon">
                <Icons
                icon="call"
                />
              </div>
              <div className="subDiv">
                <h1 className="subText">
                  CALL
                </h1>
              </div>
            </div>
            <div className="item">
              <div className="icon">
                <Icons
                icon="email"
                />
              </div>
              <div className="subDiv">
                <h1 className="subText">
                  EMAIL
                </h1>
              </div>
            </div>
            <div className="item">
              <div className="icon">
                <Icons
                icon="chat"
                />
              </div>
              <div className="subDiv">
                <h1 className="subText">
                  CHAT
                </h1>
              </div>
            </div>
          </Row>
          <Row>
            <div className="item">
              <div className="icon">
                <Icons
                icon="monitoring"
                />
              </div>
              <div className="subDiv">
                <h1 className="subText">
                  24/7 MONITORING
                </h1>
              </div>
            </div>
            <div className="item">
              <div className="icon">
                <Icons
                icon="spam"
                />
              </div>
              <div className="subDiv">
                <h1 className="subText">
                  SPAM PROTECTION
                </h1>
              </div>
            </div>
          </Row>
        </Content>
      </Section>
    </AdaptiveFrame>
)}

export default HelpSection