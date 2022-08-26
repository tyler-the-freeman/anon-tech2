/** @jsx jsx */
import { jsx } from "theme-ui";
import * as React from "react";
import { createRef, useState, useEffect } from "react";
import AdaptiveFrame from "../../elements/wireframes/AdaptiveFrame";
import Who from "./Who";
import styled from "styled-components";

import Frame from "../../elements/wireframes/Frame";
// @ts-ignore
import src from "../../images/start-your-project.jpg";
// @ts-ignore

import Line from "../../elements/ornament/Line";

import useResizeObserver from "@react-hook/resize-observer";
import { auto } from "async";

const useSize = (target) => {
  const [size, setSize] = React.useState();

  React.useLayoutEffect(() => {
    setSize(target.current.getBoundingClientRect());
  }, [target]);

  // Where the magic happens
  useResizeObserver(target, (entry) => setSize(entry.contentRect));
  //  console.log("useSize running");
  return size;
};

const FormField = styled.div`
  position: relative;
  margin: auto;
  width: 70vw;
`;

const Label = styled.label`
  font-size: 2em;
`;

const Input = styled.input`
  width: 100%;
  font-size: 1.2em;
  padding: 12px 20px;
  margin: 15px 0;
  display: inline-block;
  border: 3px solid #00ffe5;
  box-sizing: border-box;
`;

const Button = styled.button`
  font-size: 1em;
  width: 100%;
  background-color: #00ffe5;
  color: black;
  padding: 14px 20px;
  margin: 15px 0;
  border: none;
  cursor: pointer;
`;

const SectionOne = () => {
  const titleDiv = React.useRef(null);
  const title = useSize(titleDiv);
  let titleW = Math.round(title?.width);
  let titleH = Math.round(title?.height);

  return (
    <AdaptiveFrame viewHeight="100vh">
      <div
        sx={{
          // display: `flex`,
          margin: `auto`,
          // backgroundColor: `blue`,
        }}
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
            marginTop: `20px`,
          }}
        >
          <div
            ref={titleDiv}
            style={{
              position: `relative`,
              // width: `69vw`,
              // backgroundColor: `blue`,
            }}
          >
            <h1
              sx={{
                display: [`none`, `none`, `none`, `none`, `flex`],
                justifyContent: `center`,
                marginTop: `auto`,
                marginBottom: `auto`,
                fontSize: `5vw`,
                // backgroundColor: `red`,
              }}
            >
              Contact For consultation
            </h1>
            {/* <h1
            sx={{
              display: [`none`, `none`, `none`, `none`, `flex`],
              marginTop: `auto`,
              marginBottom: `auto`,
              fontSize: `5vw`,
              // backgroundColor: `red`,
            }}
          >
            We will contact you shortly
          </h1> */}
            <h1
              sx={{
                display: [`flex`, `flex`, `flex`, `flex`, `none`],
                justifyContent: `center`,
                marginTop: `auto`,
                marginBottom: `auto`,
                fontSize: [`38pt`, `55pt`, `80pt`, `80pt`, `60pt`],
                // backgroundColor: `red`,
              }}
            >
              CONTACT FOR
            </h1>
            <h1
              sx={{
                display: [`flex`, `flex`, `flex`, `flex`, `none`],
                justifyContent: `center`,
                marginTop: `auto`,
                marginBottom: `auto`,
                fontSize: [`38pt`, `55pt`, `80pt`, `80pt`, `60pt`],
                // backgroundColor: `red`,
              }}
            >
              Consultation
            </h1>
          </div>
          <div
            style={{
              marginTop: `-10px`,
              marginBottom: `30px`,
            }}
          >
            <Line width={titleW} point={8} flip={true} color="white" />
          </div>
        </div>
        {/* <div
        sx={{
          // display: `flex`,
          margin: `auto`,
          backgroundColor: `blue`,
        }}
      > */}
        <form
          method="post"
          action="https://app.callrail.com/companies/221658841/form_builder_forms/FORe2e2bf8bb19e45a68206dd5578eda57d/submit"
        >
          <FormField>
            <Label>Name</Label>
            <br />
            <Input
              type="text"
              name="your_name"
              id="your_name"
              placeholder="First Last"
            />
          </FormField>
          <FormField>
            <Label>Email Address</Label>
            <br />
            <Input
              type="email"
              name="email_address"
              id="email_address"
              placeholder="name@domain.com"
            />
          </FormField>
          <FormField>
            <Label>Phone Number</Label>
            <br />
            <Input
              type="tel"
              name="phone_number"
              id="phone_number"
              placeholder="(555) 555-555"
            />
          </FormField>
          <FormField>
            <Label>Message</Label>
            <br />
            <Input
              name="message"
              id="message"
              placeholder="Enter your message"
            />
          </FormField>
          <Button type="submit">Submit</Button>
        </form>
      </div>
    </AdaptiveFrame>
  );
};

export default SectionOne;
