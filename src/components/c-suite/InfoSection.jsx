/** @jsx jsx */
import { Image, Themed, jsx } from "theme-ui"
import * as React from "react"
import Line from "../../elements/ornament/Line"
import Icons from "./Icons"
import BodyMDX from "./body.mdx"

import styled from "styled-components"
import { Link } from "gatsby"
import FreeFrame from "../../elements/wireframes/FreeFrame"

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

    width: 50%;
    margin-top: 0px;
    margin-left: auto;
    margin-right: auto;
    
    @media screen and (max-width: 900px) {
      width: 80%;
    }
  }

  .icon {
    margin: auto;
    width: 100px;
    height: 100px;
  }

  .subDiv {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
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

const InfoSection = () => {
  return(
    <div
    style={{
      display: `flex`,
      alignItems: `center`,
      height: `auto`,
      width: `100vw`,
    }}>
      <Section>
        <div className="body">
          <BodyMDX/>
        </div>
        <Content>
          <Row>
            <div className="item">
              <div className="icon">
                <Icons
                icon="wifi"
                />
              </div>
              <div className="subDiv">
                <h1 className="subText">
                  NETWORK & WIFI
                </h1>
              </div>
            </div>
            <div className="item">
              <div className="icon">
                <Icons
                icon="support"
                />
              </div>
              <div className="subDiv">
                <h1 className="subText">
                  COMPUTER SUPPORT
                </h1>
              </div>
            </div>
          </Row>
          <Row>
            <div className="item">
              <div className="icon">
                <Icons
                icon="cameras"
                />
              </div>
              <div className="subDiv">
                <h1 className="subText">
                  SECURITY CAMERAS
                </h1>
              </div>
            </div>
            <div className="item">
              <div className="icon">
                <Icons
                icon="wiring"
                />
              </div>
              <div className="subDiv">
                <h1 className="subText">
                  TECHNOLOGY WIRING
                </h1>
              </div>
            </div>
          </Row>
          <Row>
            <div className="item">
              <div className="icon">
                <Icons
                icon="alarms"
                />
              </div>
              <div className="subDiv">
                <h1 className="subText">
                  ALARMS
                </h1>
              </div>
            </div>
            <div className="item">
              <div className="icon">
                <Icons
                icon="device"
                />
              </div>
              <div className="subDiv">
                <h1 className="subText">
                  PHONE & TABLET SUPPORT
                </h1>
              </div>
            </div>
          </Row>
        </Content>
      </Section>
    </div>
)}

export default InfoSection