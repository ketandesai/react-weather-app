import React, { lazy, Suspense } from 'react'
import styled from 'styled-components/macro'
import { DEVICES } from '../styles/constants'

const HourlyForecast = lazy(() => import('./HourlyForecast'))
const DailyForecast = lazy(() => import('./DailyForecast'))
const renderLoader = () => <p>Loading Hourly, Daily...</p>

export default function WeatherForecast({ theme }) {
  return (
    <ForecastWrapper>
      <Suspense fallback={renderLoader()}>
        <HourlyForecast theme={theme} />
        <DailyForecast theme={theme} />
      </Suspense>
    </ForecastWrapper>
  )
}

const ForecastWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding-bottom: 16px;
  @media (min-width: ${DEVICES.tablet}) {
    flex-direction: column;
  }
`
