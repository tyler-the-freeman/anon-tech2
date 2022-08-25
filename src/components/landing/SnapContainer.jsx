/** @jsx jsx */
import { Image, jsx } from "theme-ui"
import * as React from "react"
import SnapFrame from "../../elements/wireframes/SnapFrame"
import Header from "../../elements/navigation/Header"
import Hero from "./Hero"
import SectionOne from "./SectionOne"
import SectionTwo from "./SectionTwo"
import SectionThree from "./SectionThree"
import ContactFooter from "./ContactFooter"

import styled from "styled-components"

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  scroll-snap-stop: always;
  -webkit-scroll-snap-stop: always;
  -webkit-overflow-scrolling: touch;
`;

export const Sections = styled.section`
  scroll-snap-align: center;
  scroll-snap-stop: always;
  width: 100vw;
  height: 100vh;
  background: black;
  position: relative;
`;

export const EndSection = styled.section`
  scroll-snap-align: center;
  scroll-snap-stop: always;
  width: 100vw;
  height: 100vh;
  background: black;
  position: relative;
  scroll-margin-top: -100px;
`;

const SnapContainer = () => (
  <SnapFrame>
    <Container>
      <Sections id="element-1">
        <Hero />
      </Sections>
      <Sections id="element-2">
        <SectionOne />
      </Sections>
      <Sections id="element-3">
        <SectionTwo />
      </Sections>
      <Sections id="element-4">
        <SectionThree />
      </Sections>
      <EndSection id="element-5">
        <ContactFooter />
      </EndSection>
    </Container>
  </SnapFrame>
)

export default SnapContainer
