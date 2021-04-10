import React from 'react'
import styled from 'styled-components/macro'
import HourlyForecast from './HourlyForecast'
import DailyForecast from './DailyForecast'
import { DEVICES } from '../styles/constants'

export default function WeatherForecast() {
  return (
    <ForecastWrapper>
      <HourlyForecast />
      <DailyForecast />
    </ForecastWrapper>
  )
}

const ForecastWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  @media (min-width: ${DEVICES.tablet}) {
    flex-direction: column;
  }
`
