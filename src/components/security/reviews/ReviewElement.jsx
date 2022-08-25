/** @jsx jsx */
import { Image, Themed, jsx } from "theme-ui"
import * as React from "react"
import { createRef, useState, useEffect } from 'react'
import FreeFrame from "../../../elements/wireframes/FreeFrame"
import Line from "../../../elements/ornament/Line"
import src from "../../../images/services-hero.jpg"
import NavCard from "./NavCard"
import Icons from "./Icons"

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
  width: 80vw;
  height: 90%;
  grid-gap: 10px;

  @media screen and (max-width: 900px) {
    flex-direction: column;
    width: 90vw;
  }
`;

const Content = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  top: 0px;
  margin-top: 10px;
  width: 100%;

  .nameDiv {
    position: absolute;
    left: 25px;
    top: 20px;
  }

  .dateDiv {
    position: absolute;
    left: 25px;
    bottom: 20px;
  }

  .starsDiv {
    position: absolute;
    right: 15px;
    top: 25px;
    width: 200px;

    @media screen and (max-width: 900px) {
      width: 100px;
    }
  }

  .bodyDiv {
    height: 100%;
    width: 80%;
    display: flex;
    margin: auto;
    justify-content: center;

    @media screen and (max-width: 900px) {
      height: 60vh;
    }
  }

  .name {
    color: white;
  }

  .date {
    color: white;
    font-size: 20pt;
  }

  .body {
    margin: auto;
  }

  h1 {
    font-size: 40pt;
    margin-top: 0px;
    margin-bottom: 0px;
    @media screen and (max-width: 900px) {
      font-size: 30pt;
    }
  }

  p {
    font-size: 18pt;
    margin-top: auto;
    margin-bottom: auto;
  }
`;

const Box = styled.div`
  display: flex;
  position: absolute;
  top: 0;
`;

const ReviewSection = ( props ) => {
  const sectDiv = React.useRef(null);
  const sect = useSize(sectDiv);
  let sectW = Math.round(sect?.width);
  let sectH = Math.round(sect?.height);
  var numWidth = (sectW).toString();
  var sectStringWidth = numWidth.concat("px");

  const contentDiv = React.useRef(null);
  const content = useSize(contentDiv);
  let contentW = Math.round(content?.width);
  let contentH = Math.round(content?.height);

  // contentH = contentH+20;
  // var numContentH = (contentH+30).toString();
  // var stringContentH = numContentH.concat("px");

  return(
    <>
    <Frame>
      <Section
      ref={sectDiv}>
        <Content
        ref={contentDiv}>
          <div className="nameDiv">
            <h1 
            className="name"
            >
              {props.name}
            </h1>
          </div>
          <div className="dateDiv">
            <h1 
            className="date"
            >
              {props.date}
            </h1>
          </div>
          <div className="starsDiv">
            <Icons
            icon="stars"/>
          </div>
          <div className="bodyDiv">
            <p className="body">
              {props.body}
            </p>
          </div>
      </Content>
      <Box>
        <NavCard
          w={sectW}
          h={contentH}
          maxRad={4}
          midRad={3}
          color="#00ffe5"
        />
      </Box>
      </Section>
    </Frame>
    </>
)}

export default ReviewSection