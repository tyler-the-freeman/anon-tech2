/** @jsx jsx */
import { Image, jsx } from "theme-ui"
import Frame from "../../elements/wireframes/Frame"
import src from "../../images/contact-nelson.jpg"
import ContactBox from "./ContactBox"

const Hero = () => (
  <Frame
    className="contact-hero"
    backgroundImage={src}
  >
    <div
      sx={{
        justifyContent: `center`,
        display: `flex`,
        width: `100vw`,
        alignItems: `center`,
        margin: `auto`,
      }}
    >
      <ContactBox />
    </div>
  </Frame>
)
                                                                                                                                
export default Hero
