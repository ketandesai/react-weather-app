import React from 'react'
import styled from 'styled-components'
import { Wrapper } from '../styles/Wrapper'
import HourlyForecast from './HourlyForecast'
import DailyForecast from './DailyForecast'
import { DEVICES } from '../styles/constants'

const ForecastContainer = styled.div`
  display: grid;
  gap: 4px;
  margin: 10px;
  grid-template-columns: auto auto;
  grid-template-areas: 'hourly daily';

  @media (min-width: ${DEVICES.tablet}) {
    grid-template-areas:
      'hourly'
      'daily';
    grid-template-rows: auto auto;
    grid-template-columns: auto;
  }
`

export default function WeatherForecast() {
  return (
    <ForecastContainer>
      <Wrapper
        style={{
          '--grid-area': 'hourly',
          '--border': 'none',
          '--box-shadow': 'none',
        }}
      >
        <HourlyForecast />
      </Wrapper>
      <Wrapper
        style={{
          '--grid-area': 'daily',
          '--border': 'none',
          '--box-shadow': 'none',
        }}
      >
        <DailyForecast />
      </Wrapper>
    </ForecastContainer>
  )
}
