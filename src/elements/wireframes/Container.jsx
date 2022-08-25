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

const Container = ({ children, className = ``, viewHeight = `100vh`, backgroundImage}) => (
  <Wrapper>
    {children}
  </Wrapper>
)

export default Container
