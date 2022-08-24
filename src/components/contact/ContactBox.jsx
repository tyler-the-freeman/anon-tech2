/** @jsx jsx */
import * as React from "react"
import { Themed, jsx } from "theme-ui"
import Box from "../../elements/ornament/Box"
import Lines from "../../elements/ornament/Lines"
import { hideFlexMobile, hideFlexDesktop } from "../../styles/utils"
import ContactDesktopMDX from "./contact-desktop"
import ContactMobileMDX from "./contact-mobile"
import { useEffect } from "react";

const ContactBox = () => {
  return(
  <>
  {/* desktop container */}
  <div
    sx={{
      position: `absolute`,
      display: `grid`,
      gridTemplateRows: `0px 3fr`,
    }}
  >
    {/* desktop-box */}
    <div
      sx={{
        display: hideFlexMobile,
      }}
      >
     <Box
      w={600}
      h={400}
      maxRad={6}
      midRad={5}
      color="#00ffe5"
      bg="#00000070"
    />
    </div>
    {/* mobile-box */}
    <div
      sx={{
        display: hideFlexDesktop,
      }}>
    <Box
      w={320}
      h={400}
      maxRad={4}
      midRad={3}
      color="#00ffe5"
      bg="#00000070"
    />
    </div>
    {/* break */}
    <div
    sx={{
      height: [`80px`, `80px`, `40px`, `40px`, `40px`, ]
    }}
    />
    {/* title */}
    <div
      sx={{
        margin: `auto`,
      }}
    >
      <Themed.h1>
        Contact Us
      </Themed.h1>
    </div>
    {/* desktop-underline */}
    <div
      sx={{
        position: `relative`,
        justifyContent: `center`,
        display: hideFlexMobile,
        width: `100%`,
        height: `10px`,
        margin: `auto`,
      }}>
      <Lines 
        type="left" 
        width={340} 
        color="white" 
      />
    </ div>
    {/* mobile-underline */}
    {/* centering break */}
    <div
      sx={{
        height: `5px`,
      }}
    />
    <div
      sx={{
        position: `relative`,
        justifyContent: `center`,
        display: hideFlexDesktop,
        width: `100%`,
        height: `10px`,
        margin: `auto`,
      }}>
      <Lines 
        type="left" 
        width={200} 
        color="white" 
      />
    </ div>
    {/* desktop-MDX */}
    <div
      sx={{
        margin: `auto`,
        display: hideFlexMobile,
      }}
    >
      <ContactDesktopMDX />
    </div>
    {/* mobile-MDX */}
    <div
      sx={{
        margin: `auto`,
        display: hideFlexDesktop,
      }}
    >
      <ContactMobileMDX />
    </div>
  </div>
  </>
)
}

export default ContactBox
