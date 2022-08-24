/** @jsx jsx */
import { Image, jsx, Themed } from "theme-ui"
import * as React from "react"
import Frame from "../../elements/wireframes/Frame"
import src from "../../images/start-your-project.jpg"

import { createRef, useState, useEffect } from 'react'
import Line from "../../elements/ornament/Line"
import Box from "../../elements/ornament/Box"
import { Link } from "gatsby"

import useResizeObserver from '@react-hook/resize-observer'
import styled from "styled-components"

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
   &: hover {
     color: #00ffe5;
   }
`;

const Hero = () => {
  return(
  <React.Fragment>
  <Frame
    className="contact-footer"
    backgroundImage={src}
  >
    <div
      style={{
        width: `100%`,
        height: `100%`,
        // backgroundColor: `red`,
        display: `flex`,
        flexDirection: `column`,
        justifyContent: `center`,
        alignItems: `center`,
      }}
    >
      <form
      method="post"
      novalidate
      enctype="multipart/form-data"
      action="https://www.formstack.com/forms/index.php"
      class="fsForm fsSingleColumn fsMaxCol1"
      id="fsForm4635295"
    >
      <input type="hidden" name="form" value="4635295" />
      <input type="hidden" name="viewkey" value="BxHjNaajdD" />
      <input
        type="hidden"
        name="hidden_fields"
        id="hidden_fields4635295"
        value=""
      />
      <input type="hidden" name="_submit" value="1" />
      <input type="hidden" name="incomplete" id="incomplete4635295" value="" />
      <input
        type="hidden"
        name="incomplete_password"
        id="incomplete_password4635295"
      />
      <input type="hidden" name="style_version" value="3" />
      <input type="hidden" id="viewparam" name="viewparam" value="1033686" />
      <div class="fsPage" id="fsPage4635295-1">
        <div
          id="ReactContainer4635295"
          // style="display: none"
          class="FsReactContainerInitApp"
          data-fs-react-app-id="4635295"
        ></div>
        <div class="fsSubField fsNameFirst">
                  <input
                    type="text"
                    id="field118863053-first"
                    name="field118863053-first"
                    size="20"
                    aria-label="First Name"
                    // value=""
                    class="fsField fsFieldName"
                  />
                  <label class="fsSupporting" for="field118863053-first"
                    >First Name</label
                  >
                </div>
                <div class="fsSubField fsNameLast">
                  <input
                    type="text"
                    id="field118863053-last"
                    name="field118863053-last"
                    size="20"
                    aria-label="Last Name"
                    // value=""
                    class="fsField fsFieldName"
                  />
                  <label class="fsSupporting" for="field118863053-last"
                    >Last Name</label
                  >
                </div>
      </div>
      <div id="fsSubmit4635295" class="fsSubmit fsPagination">
        <input
          id="fsSubmitButton4635295"
          class="fsSubmitButton"
          // style="display: block"
          type="submit"
          value="Submit Form"
        />
        <div class="clear"></div>
        <div class="withAds"></div>
      </div>
    </form>
    <div style={{
      borderRadius: '10px' ,
      // width: 300px; 
      overflow: 'hidden'
    }}>
    <iframe src="https://smartprokc.formstack.com/forms/demo" style={{
      border: "none"
    }}
    title="demo" width="600" height="500" scrolling="“no”" frameborder="“0”"></iframe>
    </div>
            {/* <Box
              w={250}
              h={70}
              maxRad={4}
              midRad={3}
              color="#00ffe5"
              bg="#00000070"
            />
            <div
            style={{
              position: `absolute`,
              display: `flex`,
              margin: `auto`,
              width: `auto`,
              height: `auto`,
            }}>
              <h1
              style={{
                marginTop: `auto`,
                marginBottom: `auto`,
                fontSize: `35pt`,
              }}>
                CONTACT US
              </h1>
            </div>
          </div>
        <div> */}

  </div>
  </Frame>
  </React.Fragment>
)}
                                                                                                                                                                 
export default Hero
