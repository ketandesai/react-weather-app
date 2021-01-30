import React from 'react'

export const TimeDateComponent = ({ seconds, showDate, showTime, options }) => {
  let milliseconds = seconds * 1000
  const date = new Date(milliseconds)
  let defaultOptions = {
    weekday: 'short',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  }

  if (options) {
    defaultOptions = options
  }
  const dateContent = showDate
    ? date.toLocaleDateString(undefined, defaultOptions)
    : ''

  const timeContent = showTime
    ? date.toLocaleTimeString([], { hour: 'numeric', minute: 'numeric' })
    : ''

  const join = showDate && showTime ? '|' : ''

  return (
    <>
      {dateContent} {join} {timeContent}
    </>
  )
}
