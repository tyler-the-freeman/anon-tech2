/** @jsx jsx */
import { Image, Themed, jsx } from "theme-ui"
import * as React from "react"
import { createRef, useState, useEffect } from 'react'
import FreeFrame from "../../../elements/wireframes/FreeFrame"
import Line from "../../../elements/ornament/Line"
import src from "../../../images/services-hero.jpg"
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
  height: 37vh;
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
            <h1>
              Help Desk Support
            </h1>
            
            <p>
              Full Service support for commercial, government, schools and non-for profits organizations.
            </p>
            </div>
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
            <h1>
              Network & Device Management
            </h1>
            <p>
            Secure devices and company data with latest technologies and policies to ensure companies data and assets are protected.
            </p>
            </div>
            
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
            <h1>
              Identity Management
            </h1>
            <p>
            Secure your identity and ensure you are protected.
            </p>
            </div>
            
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

    {/* <SectionMobile
      ref={sectDiv}>
          <Card>
            <Content
            ref={contentDiv}
            w={stringWidth}
            subW={stringSubWidth}>
            <div>
            <h1>
              Security Cameras
            </h1>
            
            <p>
              Cameras are an essential component to your safety and the protection of your property. It is critical you have a system and design that is done right and makes your life safer.
            </p>
            </div>
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

          <Card>
            <Content
            w={stringWidth}
            subW={stringSubWidth}>
            <div>
            <h1>
              Door Access
            </h1>
            <p>
            Security and Access control provides your company with the safety, protection, and convenience of people today.
            </p>
            </div>
            
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

          <Card>
            <Content
            w={stringWidth}
            subW={stringSubWidth}>
              <div>
            <h1>
              Cabling Services
            </h1>
            <p>
            As one of the best reviewed network cabling companies, we provide highly technical services, structured cabling solutions and optical.
            </p>
            </div>
            
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
      </SectionMobile> */}
    </Frame>
)}

export default NavSection