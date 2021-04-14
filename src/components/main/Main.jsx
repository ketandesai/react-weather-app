import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchLocation, selectLocation } from '../../reducers/locationSlice'
import {
  fetchWeather,
  unitsUpdated,
  selectUnits,
} from '../../reducers/weatherSlice'
import WeatherDetail from '../weather/WeatherDetail'
import WeatherForecast from '../weather/WeatherForecast'
import styled from 'styled-components/macro'
import { COLORS } from '../styles/constants'

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
    <MainWrapper>
      <WeatherDetail />
      <WeatherForecast />
    </MainWrapper>
  )
}

const MainWrapper = styled.main`
  flex: 3;
  display: flex;
  flex-direction: column;
  padding: 16px;
  min-height: 80vh;
`
