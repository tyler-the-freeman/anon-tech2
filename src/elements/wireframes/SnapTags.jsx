/** @jsx jsx */
import { jsx } from "theme-ui"
import styled from "styled-components"

export const Wrapper = styled.div`
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

export const Section = styled.section`
  scroll-snap-align: center;
  scroll-snap-stop: always;
  width: 100vw;
  height: 100vh;
  background: black;
  position: relative;
  scroll-margin-top: 100px;

  .snap-footer {
    scroll-margin-top: 100px;
  }
`;

export const EndSection = styled.section`
  scroll-snap-align: center;
  scroll-snap-stop: always;
  width: 100vw;
  height: 100vh;
  background: black;
  position: relative;
  scroll-margin-top: -10px;
`;