import * as React from 'react'

function Sun({ width, height }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      width={width}
      height={height}
    >
      <path
        fill="#ff9800"
        d="M37 29l5-5-5-5v-8h-8l-5-5-5 5h-8v8l-5 5 5 5v8h8l5 5 5-5h8z"
      />
      <path
        d="M13 24c0 6.1 4.9 11 11 11s11-4.9 11-11-4.9-11-11-11-11 4.9-11 11"
        fill="#ffeb3b"
      />
    </svg>
  )
}

export default Sun
