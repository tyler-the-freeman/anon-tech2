/** @jsx jsx */
import { jsx } from "theme-ui";
import styled from "styled-components";
// @ts-ignore
import src from "../../images/contactBG.jpg";

type AdaptiveFrameProps = {
  children: React.ReactNode;
  className?: string;
  viewHeight?: string;
};

const AdaptiveFrame = ({
  children,
  className = ``,
  viewHeight = `100vh`,
}: AdaptiveFrameProps) => (
  <section
    sx={{
      display: `flex`,
      alignItems: `center`,
      // my: `100px`,
      height: [`auto`, `auto`, `auto`, `auto`, viewHeight],
      marginTop: [`25px`, `25px`, `50px`, `50px`, `0`],
      zIndex: 0,
      width: `100vw`,
      // backgroundColor: `red`,
    }}
    className={className}
  >
    {children}
  </section>
);

export default AdaptiveFrame;
