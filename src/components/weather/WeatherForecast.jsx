import React from 'react'
import styled from 'styled-components'
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
        }}
      >
        <HourlyForecast />
      </Wrapper>
      <Wrapper
        style={{
          '--grid-area': 'daily',
        }}
      >
        <DailyForecast />
      </Wrapper>
    </ForecastContainer>
  )
}

const Wrapper = styled.div`
  grid-area: var(--grid-area);
  text-align: var(--text-align, left);
  background-color: var(--color, white);
`
