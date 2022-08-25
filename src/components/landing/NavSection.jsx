/** @jsx jsx */
import { Image, Themed, jsx } from "theme-ui"
import * as React from "react"
import { createRef, useState, useEffect } from 'react'
import FreeFrame from "../../elements/wireframes/FreeFrame"
import Line from "../../elements/ornament/Line"
import src from "../../images/services-hero.jpg"
import NavCard from "./NavCard"

import useResizeObserver from '@react-hook/resize-observer'

import styled from "styled-components"
import { Link } from "gatsby"

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
`;

const Frame = styled.div`
  display: flex;
  height: 33vh;
  align-items: center;

  @media screen and (max-width: 900px) {
    height: auto;
  }
`;

const Section = styled.div`
  position: relative;
  margin: auto;
  display: flex;
  width: 90vw;
  grid-gap: 10px;

  @media screen and (max-width: 900px) {
    flex-direction: column;
  }
`;

const SectionMobile = styled.div`
  position: relative;
  margin: auto;
  width: 90vw;
  grid-gap: 10px;

  @media screen and (max-width: 900px) {
    display: flex;
    flex-direction: column;
  }
`;

const Card = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  position: relative;
  margin-top: 0px;

  @media screen and (max-width: 900px) {
    height: ${props => props.maxH};
  }
`;

const Content = styled.div`
  width: ${props => props.w};
  height: auto;
  display: flex;
  flex-direction: column;
  top: 0px;
  margin-top: 10px;
  z-index: 100;


  div {
    width: ${props => props.subW};
    margin: auto;
  }

  .wrap-sooner {
    
  }

  h1 {
    font-size: 40pt;
    margin-top: auto;
    margin-bottom: auto;
    @media screen and (max-width: 900px) {
      font-size: 30pt;
    }
  }

  p {
    font-size: 14pt;
    margin-top: auto;
    margin-bottom: auto;
  }
`;

const Box = styled.div`
  display: flex;
  position: absolute;
  top: 0;
`;

const Call = styled.a`
  font-size: 2em;
  text-align: center;
  text-decoration: none;
  width: 80%;
  background-color: #00ffe5;
  color: black;
  padding: 10px 10px;
  margin: auto;
  margin-top: 10px;
  margin-bottom: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const NavSection = () => {
  const sectDiv = React.useRef(null);
  const sect = useSize(sectDiv);
  let sectW = Math.round(sect?.width);
  let sectH = Math.round(sect?.height);

  let cardWidth = sectW/3.5;

  if(sectW < 810) {
    cardWidth = sectW;
  }

  var numWidth = (cardWidth).toString();
  var numSubWidth = (cardWidth-40).toString();
  // var numHeight = (height-20).toString();
  var stringWidth = numWidth.concat("px");
  var stringSubWidth = numSubWidth.concat("px");
  // var stringHeight = numHeight.concat("px");

  const cardOneDiv = React.useRef(null);
  const cardOne = useSize(cardOneDiv);
  let cardOneW = Math.round(cardOne?.width);
  let cardOneH = Math.round(cardOne?.height);
  const cardTwoDiv = React.useRef(null);
  const cardTwo = useSize(cardTwoDiv);
  let cardTwoW = Math.round(cardTwo?.width);
  let cardTwoH = Math.round(cardTwo?.height);
  const cardThreeDiv = React.useRef(null);
  const cardThree = useSize(cardThreeDiv);
  let cardThreeW = Math.round(cardThree?.width);
  let cardThreeH = Math.round(cardThree?.height);

  let contentH = Math.max(cardOneH, cardTwoH, cardThreeH);


  contentH = contentH+20;
  var numContentH = (contentH+30).toString();
  var stringContentH = numContentH.concat("px");

  return(
    <Frame>
      <Section
      ref={sectDiv}>
          <Card
          maxH={stringContentH}>
            <Content
            ref={cardOneDiv}
            w={stringWidth}
            subW={stringSubWidth}>
            <div>
            <h1
            style={{
              textAlign: `center`,
            }}>
              Security Cameras
            </h1>
            
            {/* <p>
              Move your business to scale with your growth. use technology instead of owning it.
            </p> */}
            </div>
            <br/>
            <Call href="tel:9132281334">Call Now</Call>
          </Content>
          <Box>
          <NavCard
              w={cardWidth}
              h={contentH}
              maxRad={3}
              midRad={2}
              color="white"
            />
          </Box>
            
          </Card>

          <Card
          maxH={stringContentH}>
            <Content
            ref={cardTwoDiv}
            w={stringWidth}
            subW={stringSubWidth}>
            <div>
            <h1
            style={{
              textAlign: `center`,
            }}>
              Door Access
            </h1>
            {/* <p>
            Move your organization into the companies that are defining the technology for the future.
            </p> */}
            </div>
            <br/>
            <Call href="tel:9132281334">Consult Today</Call>
            
          </Content>
          <Box>
          <NavCard
              w={cardWidth}
              h={contentH}
              maxRad={3}
              midRad={2}
              color="white"
            />
            </Box>
            
          </Card>

          <Card
          maxH={stringContentH}>
            <Content
            ref={cardThreeDiv}
            w={stringWidth}
            subW={stringSubWidth}>
              <div>
            <h1
            style={{
              textAlign: `center`,
            }}>
              Cabling Services
            </h1>
            {/* <p>
            Centralized collaboration and communication is the future.
            </p> */}
            </div>
            <br/>
            <Call href="tel:9132281334">Request Info</Call>
            
          </Content>
          <Box>
          <NavCard
              w={cardWidth}
              h={contentH}
              maxRad={3}
              midRad={2}
              color="white"
            />
            </Box>
             
          </Card>
      </Section>
    </Frame>
)}

export default NavSection