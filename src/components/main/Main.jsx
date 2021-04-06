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
    <Wrapper>
      <WeatherDetail />
      <WeatherForecast />
    </Wrapper>
  )
}

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  grid-area: main;
  text-align: var(--text-align, left);
  padding: var(--text-align, 8px);
  background-color: var(--color, white);
  border: var(--border, 1px solid red);
  border-radius: var(--border-radius, 6px);
  box-shadow: var(--box-shadow, 0px 2px 6px rgba(0, 0, 0, 0.25));
  min-height: 100%;
`
