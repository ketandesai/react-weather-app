import * as React from 'react'

function Mist(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" {...props}>
      <g fill="#bbdefb">
        <path d="M38 15.5c0 4.7-3.8 8.5-8.5 8.5S21 20.2 21 15.5 24.8 7 29.5 7s8.5 3.8 8.5 8.5z" />
        <path d="M44 23.9c0 3.9-3.1 7-7 7s-7-3.1-7-7 3.1-7 7-7 7 3.1 7 7zM18 24c0 3.9-3.1 7-7 7s-7-3.1-7-7 3.1-7 7-7 7 3.1 7 7z" />
        <path d="M24 16.5c0 3.6-2.9 6.5-6.5 6.5S11 20.1 11 16.5s2.9-6.5 6.5-6.5 6.5 2.9 6.5 6.5z" />
        <path d="M32 21.9c0 3.9-3.1 7-7 7s-7-3.1-7-7 3.1-7 7-7 7 3.1 7 7z" />
        <path d="M7 27c0 2.2 1.8 4 4 4h25c2.2 0 4-1.8 4-4v-1c0-2.2-1.8-4-4-4H11c-2.2 0-4 1.8-4 4v1z" />
      </g>
      <path
        d="M27.4 36.7c.7 2 2.5 3.3 4.6 3.3 2.8-.1 5-2.2 5-5s-2.2-5-5-5H12M21.3 20.6c.6-1.5 2-2.6 3.7-2.6 2.2 0 4 1.8 4 4s-1.8 4-4 4H14M15.4 38.4c.5 1 1.5 1.6 2.6 1.6 1.6 0 3-1.4 3-3s-1.4-3-3-3h-8"
        fill="none"
        stroke="#2196f3"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
      />
    </svg>
  )
}

export default Mist
