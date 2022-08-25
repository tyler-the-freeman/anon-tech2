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

const ManagementSection = () => {
  const lineDiv = React.useRef(null);
  const line = useSize(lineDiv);
  let lineW = Math.round(line?.width);
  let lineH = Math.round(line?.height);

  return(
    <AdaptiveFrame
    viewHeight="70vh">
      <Section>
        <div className="title"
        id="managed">
          <Themed.h1
          sx={{
            ml: `0px`,
          }}>
            Network & Device Management
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
          Device management solutions for schools and companies of all sizes: Smart Pro Technologies is a company that helps parents, teachers, school IT managers and company IT departments manage the devices their students or employees will use on a daily basis. Our team provides professional system administrators and best in class on-site support technicians, Smart Pro Technologies makes it easy for everyone to get the support they need.
          </Themed.p>
        </div>
        <Content>
          <Row>
            <div className="item">
              <div className="icon">
                <Icons
                icon="user"
                />
              </div>
              <div className="subDiv">
                <h1 className="subText">
                  USER ACCESS
                </h1>
              </div>
            </div>
            <div className="item">
              <div className="icon">
                <Icons
                icon="wifi"
                />
              </div>
              <div className="subDiv">
                <h1 className="subText">
                  WIFI
                </h1>
              </div>
            </div>
            <div className="item">
              <div className="icon">
                <Icons
                icon="machine"
                />
              </div>
              <div className="subDiv">
                <h1 className="subText">
                  MANAGED MACHINES
                </h1>
              </div>
            </div>
          </Row>
        </Content>
      </Section>
    </AdaptiveFrame>
)}

export default ManagementSection