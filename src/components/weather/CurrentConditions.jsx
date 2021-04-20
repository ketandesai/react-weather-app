import React from 'react'
import styled from 'styled-components/macro'
import { useSelector } from 'react-redux'
import { selectCurrentWeather } from '../../reducers/weatherSlice'
import Temperature from './Temperature'
import { MinutelyForecast } from './MinutelyForecast'
import { DEVICES } from '../styles/constants'

function CurrentConditions() {
  const weather = useSelector(selectCurrentWeather)
  return (
    <Wrapper>
      <div>
        <i>Feels like </i>
        <Temperature degrees={weather?.feels_like} showUnits={true} /> |{' '}
        {weather?.weather[0].description}
      </div>
      <div>
        <MinutelyForecast />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: ${DEVICES.tablet}) {
    justify-content: space-around;
  }
`

export default CurrentConditions
