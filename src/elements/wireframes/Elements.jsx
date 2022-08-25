/** @jsx jsx */
import { jsx } from "theme-ui"
import styled from "styled-components"

export const Section = styled.section`
  scroll-snap-align: center;
  scroll-snap-stop: always;
  width: 100vw;
  height: 100vh;
  background: black;
  position: relative;

  .snap-footer {
    scroll-margin-top: 100px;
  }
`;

const Elements = ({ children, className = ``, viewHeight = `100vh`, backgroundImage}) => (
  <Section>
    {children}
  </Section>
)

export default Elements
