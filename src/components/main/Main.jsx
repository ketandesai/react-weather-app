import React, { useEffect } from 'react'
import { Wrapper } from '../styles/Wrapper'
import { useDispatch, useSelector } from 'react-redux'
import { fetchLocation, selectLocation } from '../../reducers/locationSlice'
import {
  fetchWeather,
  unitsUpdated,
  selectUnits,
} from '../../reducers/weatherSlice'
import WeatherDetail from '../weather/WeatherDetail'
import WeatherForecast from '../weather/WeatherForecast'

export default function Main() {
  const dispatch = useDispatch()
  const units = useSelector(selectUnits)
  const location = useSelector(selectLocation)

  useEffect(() => {
    if (!location) {
      dispatch(fetchLocation())
    } else {
      dispatch(
        fetchWeather({ lat: location.lat, lon: location.lon, units: units })
      )
    }
  }, [location, units, dispatch])

  const onUnitsChanged = () => {
    units === 'imperial'
      ? dispatch(unitsUpdated('metric'))
      : dispatch(unitsUpdated('imperial'))
  }

  return (
    <Wrapper
      as="main"
      style={{
        '--grid-area': 'main',
      }}
    >
      <WeatherDetail />
      <WeatherForecast />
    </Wrapper>
  )
}
