/** @jsx jsx */
import { Themed, jsx } from "theme-ui"
import ImageBox from "../../elements/ornament/ImageBox"
import Lines from "../../elements/ornament/Lines"
import { hideMobile, hideDesktop } from "../../styles/utils"
// @ts-ignore
import BodyMDX from "../../mdx/home/about/desktop/body"
// @ts-ignore
import img from "../../images/team-photo.png"

type NavProps = {
  className?: string
  viewHeight?: string
}

const Two = ({ className = ``, viewHeight = `100vh`}: NavProps) => (
  <div
    sx={{
      display: `flex`,
      flexDirection: [`column`, `column`, `column`, `column`, `row`],
      // backgroundColor: 'blue',
      alignItems: `center`,
      width: [`90%`, `90%`, `90%`, `90%`, `90%`],
      height: [`auto`, `auto`, `auto`, `auto`, `auto`],
      margin: `auto`
    }}
    className={className}
  >
    <div
    sx={{
      display: `flex`,
      width: [`auto`, `auto`, `auto`, `auto`, `550px`],
      height: `100%`,
      margin: `auto`,
    }}>
      <div>
        <Themed.h1>
          WHO WE ARE
        </Themed.h1>
        {/* desktop-underline */}
        <div
          sx={{
            position: `relative`,
            width: `100%`,
            height: `10px`,
            margin: `auto`,
            paddingLeft: `10px`,
            display: hideMobile,
          }}
        >
          <Lines 
            type="right" 
            width={390} 
            color="white" 
          />
        </div>
        {/* mobile-underline */}
        <div
          sx={{
            position: `relative`,
            width: `100%`,
            height: `10px`,
            margin: `auto`,
            paddingLeft: `5px`,
            paddingTop: `5px`,
            display: hideDesktop,
          }}
        >
          <Lines 
            type="right" 
            width={200} 
            color="white" 
          />
        </div>
        <BodyMDX/>
        <Themed.h6 style={{
            marginBottom: `0`,
            color: `#00ffe5`,
            float: `right`,
        }}>
            Meet our team
        </Themed.h6>
      </div>
    </div>
    {/* <div
    sx={{
      height: `10px`,
      width: `10px`,
    }}
    /> */}
    <br/>
    <div
    sx={{
      position: `relative`,
      width: [`90vw`, `90vw`, `90vw`, `90vw`, `650px`],
      height:  `auto`,
      justifyContent: `center`,
      // backgroundColor: `red`,
      margin: `auto`,
    }}>
      <ImageBox
        href={img}
        w={1200}
        h={800}
        maxRad={6}
        midRad={5}
        color="white"
      />
    </div>
  </div>
)

export default Two
