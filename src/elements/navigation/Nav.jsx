/** @jsx jsx */
import { jsx } from "theme-ui"
import * as React from "react"
import { useState, useEffect } from "react"
import { Link } from "gatsby"
import Icons from "../navigation/Icons"
import Menu from "./Menu"

const useScrollXWindow = () => {
  const [navBar, setNavBar] = useState(false);
  useEffect(()=> {
    function navCheck() {
      if(window.scrollY >= (window.innerHeight-500)) {
        setNavBar(true);
      } else {
        setNavBar(false);
      }
    }
    window.addEventListener("scroll", navCheck);
    navCheck();
    return () => window.removeEventListener("scroll", navCheck);
  })
  return navBar
}

function Nav(props) {
  const navBar = useScrollXWindow();
  return(
  <>
    <div
      sx={{
        position: 'fixed',
        width: `100vw`,
        height: [`60px`, `60px`, `75px`],
        alignItems: `center`,
        justifyContent: `center`,
        zIndex: 100,
        transition: `all 0.5s ease-in-out`,
        backgroundColor: navBar ? 'black' : 'none'
      }}
    />
    {/* desktop-logo */}
    <div
        sx={{
          position: `fixed`,
          top: `20px`,
          left: `20px`,
          zIndex: 500,
        }}>
          <Link
          to='/'>
          <Icons 
            icon="logo" 
            hiddenMobile 
            width={462} 
            color="primary" 
          />
          </Link>
        </div>
    {/* mobile-logo */}
    <div
      sx={{
        position: `fixed`,
        top: `22px`,
        left: `20px`,
        zIndex: 500,
      }}>
        <Link
        to='/'>
        <Icons 
          icon="logoMobile" 
          hiddenDesktop 
          width={270} 
          color="primary" 
        />
        </Link>
    </div>
    <Menu />
  </>
)}

export default Nav
