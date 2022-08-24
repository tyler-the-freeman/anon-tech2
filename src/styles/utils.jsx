import { useState, useEffect } from 'react';
export const snapOn = [`none`, `none`, `none`, `none`, `block`]
export const snapOff = [`block`, `block`, `block`, `block`, `none`]

export const hideMobile = [`none`, `none`, `block`]
export const hideDesktop = [`block`, `block`, `none`]

export const hideFlexMobile = [`none`, `none`, `flex`]
export const hideFlexDesktop = [`flex`, `flex`, `none`]

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }
  
  export default function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  
    useEffect(() => {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }
  
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    return windowDimensions;
  }