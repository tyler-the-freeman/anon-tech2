/** @jsx jsx */
import * as React from "react"
import { jsx } from "theme-ui"

const lines = {
  left: {
    shape: (
      <React.Fragment>
        <g clip-path="url(#clip0)">
          <path d="M341 0L-36 4L341 8V0Z" />
        </g>
        <defs>
          <clipPath id="clip0">
            <rect width="341" height="8" transform="matrix(-1 0 0 1 341 0)"/>
          </clipPath>
        </defs>
      </React.Fragment>
    ),
    viewBox: `0 0 341 8`,
  },
  right: {
    shape: (
      <React.Fragment>
        <path d="M0 0L491 4L0 8V0Z"/>
      </React.Fragment>
    ),
    viewBox: `0 0 491 8`,
  },
}

type LinesType = "left" | "right"

type LinesProps = {
  stroke?: boolean
  color?: string | number | any
  width: number
  type: LinesType
}

const Lines = ({ stroke = false, color = ``, width, type }: LinesProps) => (
  <svg
    sx={{
      position: `absolute`,
      stroke: stroke ? `currentColor` : `none`,
      fill: stroke ? `none` : `currentColor`,
      display: `flex`,
      color,
      width,
    }}
    viewBox={lines[type].viewBox}
  >
    {lines[type].shape}
  </svg>
)

export default Lines
