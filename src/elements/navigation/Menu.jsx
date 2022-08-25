/** @jsx jsx */
import { jsx, Themed } from "theme-ui"
import * as React from "react"
import { useState, useEffect } from 'react'
import Icons from "../navigation/Icons"
import { Link } from "gatsby"
import styled from "styled-components"
import { hideMobile, hideDesktop } from "../../styles/utils"
import Line from "../../elements/ornament/Line"
import useResizeObserver from '@react-hook/resize-observer'

const useSize = (target) => {
    const [size, setSize] = React.useState()
  
    React.useLayoutEffect(() => {
      setSize(target.current.getBoundingClientRect())
    }, [target])
  
    // Where the magic happens
    useResizeObserver(target, (entry) => setSize(entry.contentRect))
  //  console.log("useSize running");
    return size
  }

const Container = styled.div`
    white-space: nowrap;
    background-color: black;
    width: 100vw;
    height: 100vh;
    position: fixed;
    right: ${props => props.isOpen ? '0' : '-100vw'};  
    transition: 500ms ease;
    z-index: 200;
    cursor: normal;
`;

const Items = styled.div` 
    z-index: 500;
    position: absolute;
    left: 50%;
    top: 50%;
    display: flex;
    flex-direction: column;
    transform: translate(-50%,-50%);
    width: 100%;
    align-self: center;
    transition: transform 500ms ease;
    
    .accend {
        cursor: pointer;
        margin-left: auto;
        opacity: ${props => props.isSub ? '0' : '1'}; 
        margin-right: auto;
        transform: translate(${props => props.isSub ? '0, -100vh' : '0, 0'});
        transition: opacity 1s, transform 1000ms ease;
    }

    .expand {
        cursor: pointer;
        margin-left: auto;
        margin-right: auto;
        transition: transform 500ms ease;
        transform: translate(${props => props.isSub ? '0, -10vh' : '0, 0'});
        @media screen and (max-width: 900px) {
            transform: translate(${props => props.isSub ? '0, -25vh' : '0, 0'});
        }
    }

    .decend {
        cursor: pointer;
        margin-left: auto;
        margin-right: auto;
        opacity: ${props => props.isSub ? '0' : '1'}; 
        transform: translate(${props => props.isSub ? '0, 100vh' : '0, 0'});
        transition: opacity 1s, transform 1000ms ease;
    }

    .main {
        cursor: pointer;
        margin-top: 15px;
        margin-bottom: -3vh;
        margin-left: 0;
        margin-right: 0;
        font-size: 129pt;

        &:hover {
            color: #00ffe5;
            filter: drop-shadow(0 0 0.75rem #00ffe5);
        }

        @media screen and (max-width: 1200px) {
            font-size: 129pt;
        }
        @media screen and (max-width: 900px) {
            font-size: 88pt;
            margin-bottom: -2.5vh;
        }
        @media screen and (max-width: 600px) {
            font-size: 19vw;
            width: 75vw;
            margin-bottom: -2vh;
        }
        @media screen and (max-width: 400px) {
            font-size: 19vw;
        }
    }
`;

const Services = styled.div`
    z-index: ${props => props.isSub ? '500' : '0'}; 
    display: flex;
    position: absolute;
    left: 50%;
    top: 50%;
    width: 100%;
    transform: translate(-50%,0);
    transition: opacity 1s;

    @media screen and (max-width: 1200px) {
    }
    @media screen and (max-width: 900px) {
        flex-direction: column
    }
    @media screen and (max-width: 600px) {
        flex-direction: column
    }
    @media screen and (max-width: 400px) {
        flex-direction: column
    }
    
    .expansion {
        margin-top: 3vh;
        margin-bottom: 3vh;
        margin-left: auto;
        margin-right: auto;
        opacity: ${props => props.isSub ? '1' : '0'}; 
        transform: translate(${props => props.isSub ? '0, 10vh' : '0, 0'});
        transition: opacity .5s, transform 500ms ease;

        @media screen and (max-width: 900px) {
            transform: translate(${props => props.isSub ? '0, -10vh' : '0, 0'});
        }
    }

    .sub {
        cursor: pointer;
        margin-top: auto;
        margin-bottom: auto;
        font-size: 67pt;

        &:hover {
            filter: drop-shadow(0 0 0.75rem #00ffe5);
            color: #00ffe5;
        }

        @media screen and (max-width: 1200px) {
            font-size: 67pt;
        }
        @media screen and (max-width: 900px) {
            font-size: 50pt;
        }
        @media screen and (max-width: 600px) {
            font-size: 10vw;
        }
        @media screen and (max-width: 400px) {
            font-size: 10vw;
        }
    }
`;

const Go = styled(Link)`
    text-decoration: none;
    color: white;
`;

const Menu = () => {
    // const [isNeonHamburger, setNeonHamburger] = useState(false);
    // const [isNeonClose, setNeonClose] = useState(false);

    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
        setIsSub(false);
    };

    const [isSub, setIsSub] = useState(false);
    const toggleSub = () => setIsSub(!isSub);
    // console.log("sub: ", isSub);

    const barDiv = React.useRef(null);
    const bar = useSize(barDiv);
    let barW = Math.round(bar?.width);
    let barH = Math.round(bar?.height);
    
return(
    <>
    {/* Below is death */}
    <Container isOpen={isOpen} isSub={isSub}
    >   
        <div
        onClick={toggleMenu}
        // onMouseEnter={() => setNeonClose(true)}
        // onMouseLeave={() => setNeonClose(false)}
        sx={{
            zIndex: `50`,
            display: hideMobile,
            position: `absolute`,
            top: `20px`,
            right: `58px`,

        }}>
            <Icons 
            // neon={isNeonClose}
            icon="close" 
            hiddenMobile 
            width={36} 
            stroke 
            color="white" 
            />
        </div>
        <div
        onClick={toggleMenu}
        sx={{
            zIndex: `50`,
            display: hideDesktop,
            position: `absolute`,
            top: `20px`,
            right: `48px`,
        }}>
            <Icons 
            icon="closeMobile" 
            hiddenDesktop 
            width={24} 
            stroke 
            color="white" 
            />
        </div>
        <Items isSub={isSub}
        >
            <div className="accend"
            >
                <Go 
                to='/about'>
                <h1 className="main"
                ref={barDiv}>
                    WHO WE ARE
                </h1>
                <Line
                width={barW}
                point={barW/50}
                flip={false}
                color="white"
                />
                </Go>
            </div>
            <div className="expand"
            onClick={toggleSub}>
                <h1 className="main">
                    WHAT WE DO
                </h1>
                <Line
                width={barW}
                point={barW/50}
                flip={false}
                color="white"
                />
            </div>
            <div className="decend">
                <Go 
                to='/contact'>
                <h1 className="main">
                    CONTACT US
                </h1>
                <Line
                width={barW}
                point={barW/50}
                flip={false}
                color="white"
                />
                </Go>
            </div>
        </Items>
        <Services isSub={isSub}>
            <div className="expansion">
                <Go 
                to='/security/services'>
                    <h1 className="sub">
                        SECURITY
                    </h1>
                </Go>
            </div>
            <div className="expansion">
                <Go 
                to='/technology/managed-it'>
                    <h1 className="sub">
                        TECHNOLOGY
                    </h1>
                </Go>
            </div>
            {/* <div className="expansion">
                <Go 
                to='/c-suite'>
                    <h1 className="sub">
                        Audio/Visual
                    </h1>
                </Go>
            </div> */}
            <div className="expansion">
                <Go 
                to='/c-suite'>
                    <h1 className="sub">
                        C-SUITE
                    </h1>
                </Go>
            </div>
        </Services>
        
    </Container>
      <div
      onClick={toggleMenu}
      sx={{
        position: `fixed`,
        top: `20px`,
        right: `58px`,
        zIndex: 100,

      }}>
        <Icons 
          icon="hamburger" 
          hiddenMobile 
          width={36} 
          stroke 
          color="primary" 
        />
      </div>
      <div
      onClick={toggleMenu}
      style={{
        position: `fixed`,
        top: `18px`,
        right: `48px`,
        zIndex: 100,
      }}>
        <Icons 
          icon="hamburgerMobile" 
          hiddenDesktop 
          width={24} 
          stroke 
          color="primary" 
        />
      </div>
    </>
)}

export default Menu