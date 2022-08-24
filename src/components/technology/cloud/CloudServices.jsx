/** @jsx jsx */
import { Image, Themed, jsx } from "theme-ui"
import * as React from "react"
import { createRef, useState, useEffect } from 'react'
import Line from "../../../elements/ornament/Line"
import Icons from "./Icons"
import NavCard from "./NavCard"

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
    margin: auto;
    width: auto;
    margin-bottom: 25px;
  }

  .underline {
    width: 450px;

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
  margin-top: 40px;
  grid-gap: 50px;

  @media screen and (max-width: 900px) {
    flex-direction: column;
  }

  @media screen and (max-width: 600px) {
    flex-direction: column;
    margin-bottom: 0px;
    margin-top: 0px;
  }

  .item {
    display: flex;
    flex-direction: row;

    margin-top: 0px;
    margin-left: auto;
    margin-right: auto;
    grid-gap: 10%;
    width: 40%;

    @media screen and (max-width: 900px) {
      width: 80%;
    }

    @media screen and (max-width: 600px) {
      flex-direction: column;
      width: 80%;
    }

  }

  .icon {
    margin: auto;
    width: 150px;
    height: 150px;
    padding-left: 20px;


    @media screen and (max-width: 600px) {
      margin-top: 20px;
    }
  }

  .subDiv {
    margin: auto;
    padding-top: 20px;
    padding-bottom: 10px;
    padding-right: 10px;

    @media screen and (max-width: 900px) {
      margin-top: 20px;
    }
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

  .box {
    position: absolute;
  }
`;

const CardSection = styled.div`
  position: relative;
  margin: auto;
  display: flex;
  width: 90vw;
  grid-gap: 10px;

  @media screen and (max-width: 900px) {
    flex-direction: column;
  }

`;

const CloudServices = () => {
  const lineDiv = React.useRef(null);
  const line = useSize(lineDiv);
  let lineW = Math.round(line?.width);
  let lineH = Math.round(line?.height);

  const sectDiv = React.useRef(null);
  const sect = useSize(sectDiv);
  let sectW = Math.round(sect?.width);
  let sectH = Math.round(sect?.height);

  const bodyDiv = React.useRef(null);
  const body = useSize(bodyDiv);
  let bodyW = Math.round(body?.width);
  let bodyH = Math.round(body?.height);

  return(
    <AdaptiveFrame
    viewHeight="60vh">
      <Section
      >
        <div className="title">
          <Themed.h1
          sx={{
            ml: `0px`,
          }}>
            CLOUD SERVICES
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
        <Row>
        <div className="item"
        ref={sectDiv}>
          <div className="icon">
            <Icons
            icon="azure"
            />
          </div>
          <div className="subDiv"
          ref={bodyDiv}>
            <h1 className="subText">
              Azure
            </h1>
            <p>
              Azure Directory
            </p>
            <p>
              Cloud Migrations
            </p>
            <p>
              Intelligent Cloud Services
            </p>
            <p>
              Data Backup & Recovery
            </p>
          </div>
          <div className="box">
            <NavCard
              w={sectW}
              h={sectH}
              maxRad={3}
              midRad={2}
              color="#00ffe5"
            />
          </div>
        </div>
        <div className="item">
          <div className="icon">
            <Icons
            icon="office"
            />
          </div>
          <div className="subDiv">
            <h1 className="subText">
              O365
            </h1>
            <p>
              Outlook Email
            </p>
            <p>
              Teams VoIP
            </p>
            <p>
              Service Migration
            </p>
            <p>
              OneDrive & Sharepoint
            </p>
          </div>
          <div className="box">
            <NavCard
              w={sectW}
              h={sectH}
              maxRad={3}
              midRad={2}
              color="#00ffe5"
            />
          </div>
        </div>
        </Row>
        
      </Section>
    </AdaptiveFrame>
)}

export default CloudServices