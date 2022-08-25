/** @jsx jsx */
import { jsx } from "theme-ui"
import * as React from "react"
import { BlockList } from "net"

const icons = {
  stars: {
    shape: (
        <React.Fragment>
          <path d="M12.0232 0L15.7768 7.58824L24.1051 8.76471L18.0641 14.6471L19.4717 23L12.0232 19.0588L4.57468 23L6.04093 14.6471L0 8.76471L8.32827 7.58824L12.0232 0Z" fill="#00FFE5"/>
          <path d="M40.7616 0L44.5152 7.58824L52.8435 8.76471L46.8025 14.6471L48.2101 23L40.7616 19.0588L33.3131 23L34.7793 14.6471L28.7384 8.76471L37.0667 7.58824L40.7616 0Z" fill="#00FFE5"/>
          <path d="M69.5 0L73.2536 7.58824L81.5232 8.76471L75.5409 14.6471L76.9485 23L69.5 19.0588L62.0515 23L63.4591 14.6471L57.4768 8.76471L65.8051 7.58824L69.5 0Z" fill="#00FFE5"/>
          <path d="M98.2384 0L101.933 7.58824L110.262 8.76471L104.279 14.6471L105.687 23L98.2384 19.0588L90.7899 23L92.1975 14.6471L86.2152 8.76471L94.4848 7.58824L98.2384 0Z" fill="#00FFE5"/>
          <path d="M126.977 0L130.672 7.58824L139 8.76471L132.959 14.6471L134.425 23L126.977 19.0588L119.528 23L120.936 14.6471L114.895 8.76471L123.223 7.58824L126.977 0Z" fill="#00FFE5"/>
        </React.Fragment>
    ),
    viewBox: `0 0 139 23`,
  },
}

type IconType = "stars"

type IconProps = {
  icon: IconType
}

const Icons = ({ icon }: IconProps) => (
  <svg
    width="100%" 
    height="100%" 
    viewBox={icons[icon].viewBox}
  >
    {icons[icon].shape}
  </svg>
)

export default Icons
