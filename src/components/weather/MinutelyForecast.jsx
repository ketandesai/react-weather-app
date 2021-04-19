import React from 'react'

import { useSelector } from 'react-redux'
import { selectMinutelyWeather } from '../../reducers/weatherSlice'
import { selectTheme } from '../../reducers/themeSlice'

import OpacityIcon from '@material-ui/icons/Opacity'

export const MinutelyForecast = () => {
  const theme = useSelector(selectTheme)
  const color = theme === 'light' ? 'primary' : 'inherit'
  const weather = useSelector(selectMinutelyWeather)
  let initialValue = 0
  let sum = weather?.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue.precipitation
  }, initialValue)

  let content = 'no precipitation in the next hour'
  if (sum > 0) {
    let precipitation = Number.parseFloat(sum / 25.4).toFixed(1)
    content = `${precipitation} in within the hour`
  }
  return (
    <>
      <OpacityIcon color={color} fontSize="small" />
      {content}
    </>
  )
}
