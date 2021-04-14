import React from 'react'
import { selectMinutelyWeather } from '../../reducers/weatherSlice'
import { useSelector } from 'react-redux'
import OpacityIcon from '@material-ui/icons/Opacity'

export const MinutelyForecast = () => {
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
      <OpacityIcon color="primary" fontSize="small" />
      {content}
    </>
  )
}
