/** @jsx jsx */
import { Image, Themed, jsx } from "theme-ui"
import * as React from "react"
import { createRef, useState, useEffect } from 'react'
import FreeFrame from "../../../elements/wireframes/FreeFrame"
import Line from "../../../elements/ornament/Line"
import src from "../../../images/services-hero.jpg"
import NavCard from "./NavCard"
import ReviewElement from "./ReviewElement"

const ReviewSection = () => {

  return(
    <> 
    <ReviewElement
    name="Allen H."
    date="05.17.2020"
    body="CJ was great! He was professional and courteous, arrived on time and finished the job successfully in the estimated time frame. Good experience working with this business!"
    />
    <br/>
    <ReviewElement
    name="David S."
    date="12.04.2020"
    body="Just wanted to commend your two employees from yesterday.   They were very professional, did a great job cleaning up after themselves, communicating with us and explaining what was going on.  Great JOB!!"
    />
    <br/>
    <ReviewElement
    name="Robert L."
    date="04.17.2020"
    body="They showed up on time, quickly and competently installed the security system, and finished on budget. All around, a pleasant experience."
    />
    <br/>
    <ReviewElement
    name="Thomas J."
    date="01.28.2021"
    body="The overall experience could not have been better!"
    />
    <br/>
    <ReviewElement
    name="Marilyn W."
    date="05.22.2020"
    body="This company came in did excellent work. Explain everything to me. The first company left a senior citizen with incomplete work. I am so happy I found this company."
    />
    <br/>

    <ReviewElement
    name="Laura H."
    date="06.20.2020"
    body="They communicate well and answer questions quickly. They offered many options for me to find the one that suited my needs the best. They were quick to get items scheduled and installed."
    />
    <br/>
    <ReviewElement
    name="Laronna S."
    date="03.06.2021"
    body="This company provides punctual and quality service."
    />
    <br/>
    <ReviewElement
    name="Jaycee B."
    date="08.25.2020"
    body="Very courteous, quick and helpful. Will definitely hire again."
    />
    <br/>
    <ReviewElement
    name="Jim M."
    date="02.27.2020"
    body="Smart Pro is professional and efficient. You can expect them to perform their work with expertise and on time. Great people to work with."
    />
    <br/>
    <ReviewElement
    name="Pamela G."
    date="11.17.2019"
    body="Installer was efficient and friendly. Very pleased with the service."
    />
    <br/>
    </>
)}

export default ReviewSection