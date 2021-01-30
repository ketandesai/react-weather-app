import React from 'react'

export const TimeComponent = ({ seconds, options }) => {
  let milliseconds = seconds * 1000
  const date = new Date(milliseconds)
  let defaultOptions = {
    hour: 'numeric',
    minute: 'numeric',
  }
  if (options) {
    defaultOptions = options
  }

  const content = date.toLocaleTimeString([], defaultOptions)
  return <>{content}</>
}
