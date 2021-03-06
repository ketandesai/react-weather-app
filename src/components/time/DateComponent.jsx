import React from 'react'

const DateComponent = ({ seconds, options }) => {
  let milliseconds = seconds * 1000
  const date = new Date(milliseconds)
  let defaultOptions = {
    weekday: 'short',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }

  if (options) {
    defaultOptions = options
  }
  const content = date.toLocaleDateString(undefined, defaultOptions)

  return <>{content}</>
}

export default DateComponent
