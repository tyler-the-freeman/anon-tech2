/** @jsx jsx */
import { Themed, jsx } from "theme-ui";
import * as React from "react";
import { createRef, useState, useEffect } from "react";
import AdaptiveFrame from "../../elements/wireframes/AdaptiveFrame";
import styled from "styled-components";

import Frame from "../../elements/wireframes/Frame";
import src from "../../images/start-your-project.jpg";

import Line from "../../elements/ornament/Line";
import TaperedBox from "./TaperedBox"

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
  width: 90%;
`;

const Label = styled.label`
  font-size: 1.2em;
`;

const Input = styled.input`
  all: unset;
  color: #00ffe5;
  
  font-size: 1.2em;
  padding: 15px 0px 0px 0px;
  display: inline-block;
  // background-color: red;
  width: 80%;

  ::placeholder {
    color: #ffffff90;
  }
`;

const LineCont = styled.div`
  padding-bottom: 20px;
`;

const Button = styled.button`
  font-size: 1em;
  width: 50%;
  background-color: white;
  border: 10px;
  border-color: #00ffe5;
  color: black;
  padding: 14px 20px;
  margin: auto;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  // border: 3px solid #00ffe5;
  cursor: pointer;
`;

const FormFrame = styled.div`
  margin: auto;
  width: 90%;
  display: flex;
  justify-content: center;
  padding-bottom: 40px;

  .details-frame {
    position: absolute;
    width: 40%;
    margin: auto;

    @media screen and (max-width: 1200px) {
      width: 75%;
    }
  }

  .box-frame {
    position: aboslute;
    margin: auto;
  }
`;

const StructuredForm = () => {
  const formDiv = React.useRef(null);
  const form = useSize(formDiv);
  let formW = Math.round(form?.width);
  let formH = Math.round(form?.height);

  const titleDiv = React.useRef(null);
  const title = useSize(titleDiv);
  let titleW = Math.round(title?.width);
  let titleH = Math.round(title?.height);

  const fieldDiv = React.useRef(null);
  const field = useSize(fieldDiv);
  let fieldW = Math.round(field?.width);
  let fieldH = Math.round(field?.height);

  return (
    <AdaptiveFrame viewHeight="65vh">
      <FormFrame>
      <div className="details-frame"
        ref={formDiv}
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
                fontSize: `3vw`,
                // backgroundColor: `red`,
              }}
            >
              Contact Information
            </h1>
            <h1
              sx={{
                display: [`flex`, `flex`, `flex`, `flex`, `none`],
                justifyContent: `center`,
                marginTop: `auto`,
                marginBottom: `auto`,
                fontSize: [`35pt`, `55pt`, `80pt`, `80pt`, `60pt`],
                // backgroundColor: `red`,
              }}
            >
              Contact
            </h1>
            <h1
              sx={{
                display: [`flex`, `flex`, `flex`, `flex`, `none`],
                justifyContent: `center`,
                marginTop: `auto`,
                marginBottom: `auto`,
                fontSize: [`35pt`, `55pt`, `80pt`, `80pt`, `60pt`],
                // backgroundColor: `red`,
              }}
            >
              Information
            </h1>
          </div>
          <div
            style={{
              marginTop: `-10px`,
              marginBottom: `30px`,
            }}
          >
            <Line width={titleW} point={8} flip={false} color="white" />
          </div>
        </div>
        <form
          method="post"
          action="https://app.callrail.com/companies/221658841/form_builder_forms/FOR6ca858cfebdc4e2b9e8c172c2c1d5cd2/submit"
        >
          <FormField>
            <Label>Name</Label>
            <br />
            <Input
            ref={fieldDiv}
              type="text"
              name="your_name"
              id="your_name"
              placeholder="First Last"
            />
            <LineCont>
            <Line width={fieldW+50} point={4} flip={false} color="white" />
            </LineCont>
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
            <LineCont>
            <Line width={fieldW+50} point={4} flip={false} color="white" />
            </LineCont>
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
            <LineCont>
            <Line width={fieldW+50} point={4} flip={false} color="white" />
            </LineCont>
          </FormField>
          {/* <FormField>
            <Label>Message</Label>
            <br />
            <Input
              name="message"
              id="message"
              placeholder="Enter your message"
            />
            <LineCont>
            <Line width={fieldW+50} point={4} flip={false} color="white" />
            </LineCont>
          </FormField> */}
          <Button type="submit">Submit</Button>
        </form>
      {/* <div className="box-frame">
      <TaperedBox
          w={formW}
          h={500}
          maxRad={3}
          midRad={2}
          color="cyan"
        />
      </div> */}
      </div>
      {/* <BoxFrame>
      <TaperedBox
          w={formW}
          h={500}
          maxRad={3}
          midRad={2}
          color="cyan"
        />
      </BoxFrame> */}
      <div className="box-frame">
      <TaperedBox
          w={formW+60}
          h={formH}
          maxRad={3}
          midRad={2}
          color="#00ffe5"
        />
      </div>
      </FormFrame>
    </AdaptiveFrame>
  );
};

export default StructuredForm;
