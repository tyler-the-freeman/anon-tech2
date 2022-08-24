/** @jsx jsx */
import { Image, Themed, jsx } from "theme-ui"
import Lines from "../../elements/ornament/Lines"
import { hideMobile, hideDesktop } from "../../styles/utils"
import styled from "styled-components"
import logo01 from "../../images/logos/adobe.png"
import logo02 from "../../images/logos/apple.png"
import logo03 from "../../images/logos/avigilon.png"
import logo04 from "../../images/logos/datto.png"
import logo05 from "../../images/logos/doorbird.png"
import logo06 from "../../images/logos/hp.png"
import logo07 from "../../images/logos/jamf.png"
import logo08 from "../../images/logos/kantech.png"
import logo09 from "../../images/logos/kisi.png"
import logo10 from "../../images/logos/microsoft.png"
import logo11 from "../../images/logos/sophos.png"
import logo12 from "../../images/logos/verkada.png"

export const Img = styled.img`
  display: block;
  object-fit: contain;
  max-width: 100%;
  max-height: 100%;
  margin: auto;
`;

export const ImgDiv = styled.div`
  display: flex;
  width: 200px;
  height: 100px;
  margin: auto;
  @media screen and (max-width: 900px) {
    width: 140px;
    height: 70px;
  }
  @media screen and (max-width: 600px) {
    width: 70px;
    height: 35px;
  }
`;

export const GrpDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: auto;
  grid-gap: 30px;
  @media screen and (max-width: 1200px) {
    flex-direction: row;
  }
`;

export const Logos = styled.div`
  display: flex;
  flex-direction: row;
  grid-gap: 30px;
  width: 90%;
  height: 100%;
  margin: auto;
  @media screen and (max-width: 1200px) {
    flex-direction: column;
  }
`;

const Brands = () => {

return (
  <div
  sx={{
      justifyContent: `center`,
      width: `90%`,
      // backgroundColor: 'blue',
      height: [`auto`, `auto`, `auto`, `auto`, `80%`],
      margin: `auto`
  }}>
    {/* OPEN */}
    <div
      sx={{
        display: `flex`,
        flexDirection: `column`,
        width: [`100%`, `100%`, `100%`, `100%`, `100%`],
        margin: `auto`,
      }}>
      {/* TITLE & LINE */}
      <div
        sx={{
          margin: [``, ``, `auto`, `auto`, `auto`]
        }}>
          <Themed.h1
            sx={{
              display: hideMobile,
              margin: `auto`,
            }}>
            BRANDS WE WORK WITH
          </Themed.h1>
          <Themed.h1
            sx={{
              display: hideDesktop,
              marginLeft: `auto`,
            }}>
            BRANDS
          </Themed.h1>
          <Themed.h1
            sx={{
              display: hideDesktop,
              margin: `auto`,
            }}>
            WE WORK WITH
          </Themed.h1>
          <div
          sx={{
            display: hideMobile,
          }}>
          <Lines 
            type="right" 
            width={680} 
            color="white" 
          />
          </div>
          <div
          sx={{
            display: hideDesktop,
          }}>
          <Lines 
            type="right" 
            width={220} 
            color="white" 
          />
          </div>
      </div>
    </div>
    {/* CLOSE */}
    <div sx={{height: [`40px`, `40px`, `60px`, `60px`, `0px`]}}/>
  <Logos>
    <GrpDiv>
      <ImgDiv>
        <Img src={logo01} alt="" />
      </ImgDiv>
      <ImgDiv>
        <Img src={logo02} alt=""/>
      </ImgDiv>
      <ImgDiv>
       <Img src={logo03} alt=""/>
      </ImgDiv>
    </GrpDiv>
    <GrpDiv>
      <ImgDiv>
       <Img src={logo04} alt=""/>
      </ImgDiv>
      <ImgDiv>
       <Img src={logo05} alt=""/>
      </ImgDiv>
      <ImgDiv>
       <Img src={logo06} alt=""/>
      </ImgDiv>
    </GrpDiv>
    <GrpDiv>
      <ImgDiv>
       <Img src={logo07} alt=""/>
      </ImgDiv>
      <ImgDiv>
       <Img src={logo08} alt=""/>
      </ImgDiv>
      <ImgDiv>
       <Img src={logo09} alt=""/>
      </ImgDiv>
    </GrpDiv>
    <GrpDiv>
      <ImgDiv>
       <Img src={logo10} alt=""/>
      </ImgDiv>
      <ImgDiv>
       <Img src={logo11} alt=""/>
      </ImgDiv>
      <ImgDiv>
       <Img src={logo12} alt=""/>
      </ImgDiv>
    </GrpDiv>
  </Logos>
  </div>
)}

export default Brands
