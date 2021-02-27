import React, { useEffect } from 'react'
import { selectTheme } from '../../reducers/themeSlice'
import { fetchWeather, selectUnits } from '../../reducers/weatherSlice'
import { fetchLocation, selectLocation } from '../../reducers/locationSlice'
import { useDispatch, useSelector } from 'react-redux'
import { WeatherDetail } from './WeatherDetail'
import { HourlyForecast } from './HourlyForecast'
import { DailyForecast } from './DailyForecast'
import { WeatherAlert } from './WeatherAlert'
import { Autocompleter } from '../search/Autocompleter'
import styled, { css } from 'styled-components'

const WeatherContainer = styled.div`
  background: linear-gradient(135deg, #737dfe, #ffcac9);
  border-radius: 20px;
  padding: 20px 20px 20px 20px;
  max-width: 1000px;
  width: 90%;
  margin: 50px auto;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);

  ${(props) =>
    props.dark &&
    css`
      background: linear-gradient(135deg, #402662, #3900a6);
      background: linear-gradient(135deg, #6699ff, #000066);
      background: linear-gradient(135deg, #b2ffda, #000066);
      background: linear-gradient(135deg, #0b63f6, #003cc5);
      background: linear-gradient(135deg, #003cc5, #000066);
    `}
`

const Button = styled.button`
  background: var(--color-primary);
`

const Paragraph = styled.p`
  font-size: var(--font-size-small);
`

const OpeningParagraph = styled.p`
  font-size: var(--font-size-medium);
`

export const WeatherPage = () => {
  const theme = useSelector(selectTheme)
  const dispatch = useDispatch()
  const location = useSelector(selectLocation)
  const units = useSelector(selectUnits)
  useEffect(() => {
    if (!location) {
      dispatch(fetchLocation())
    } else {
      dispatch(
        fetchWeather({ lat: location.lat, lon: location.lon, units: units })
      )
    }
  }, [location, units, dispatch])

  return (
    <>
      <Autocompleter />
      <WeatherContainer dark={theme === 'dark'}>
        <WeatherDetail />
        <div className="grid gap-2 grid-cols-2 md:grid-cols-1 divide-x md:divide-x-0 md:divide-y">
          <HourlyForecast />
          <DailyForecast />
        </div>
      </WeatherContainer>
      <WeatherAlert />
    </>
  )
}
