/** @jsx jsx */
import { Image, Themed, jsx } from "theme-ui"
import * as React from "react"
import { createRef, useState, useEffect } from 'react'
import FreeFrame from "../../../elements/wireframes/FreeFrame"
import Line from "../../../elements/ornament/Line"
import src from "../../../images/services-hero.jpg"
import BodyMDX from "./body.mdx"
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

  const contentDiv = React.useRef(null);
  const content = useSize(contentDiv);
  let contentW = Math.round(content?.width);
  let contentH = Math.round(content?.height);
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

          <Card
          maxH={stringContentH}>
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

          <Card
          maxH={stringContentH}>
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