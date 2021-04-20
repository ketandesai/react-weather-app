import React, { lazy, Suspense, useEffect } from 'react'
import styled from 'styled-components/macro'
import { useDispatch, useSelector } from 'react-redux'
import { fetchLocation, selectLocation } from '../../reducers/locationSlice'
import { fetchWeather, selectUnits } from '../../reducers/weatherSlice'

const WeatherDetail = lazy(() => import('./../weather/WeatherDetail'))
const WeatherForecast = lazy(() => import('../weather/WeatherForecast'))
const WeatherAlert = lazy(() => import('../weather/WeatherAlert'))
const renderLoader = () => <p>Loading 2...</p>

export default function Main({ theme }) {
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

  return (
    <MainWrapper>
      <Suspense fallback={renderLoader()}>
        <WeatherDetail theme={theme} />
        <WeatherForecast theme={theme} />
        <WeatherAlert theme={theme} />
      </Suspense>
    </MainWrapper>
  )
}

const MainWrapper = styled.main`
  flex: 3;
  display: flex;
  flex-direction: column;
  padding: 16px;
  min-height: 70vh;
`
