import React from 'react'
import styled from 'styled-components/macro'
import { GRADIENTS } from '../styles/constants'
import TemperatureToggle from '../toggle/TemperatureToggle'
import FavoriteButton from '../favorites/FavoriteButton'
import CurrentWeather from './CurrentWeather'
import CurrentInfo from './CurrentInfo'
import CurrentConditions from './CurrentConditions'

const WeatherDetail = ({ theme }) => {
  const style = {
    '--background': GRADIENTS[theme],
  }
  return (
    <>
      <Wrapper style={style}>
        <ToggleWrapper>
          <TemperatureToggle />
          <FavoriteButton theme={theme} />
        </ToggleWrapper>
        <CurrentWeather />
        <CurrentInfo />
        <CurrentConditions />
      </Wrapper>
    </>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  margin-bottom: 16px;
  padding: 16px;
  grid-template-rows: repeat(3, auto);

  border-radius: var(--border-radius, 10px);
  background: var(--background);
`

const ToggleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

export default WeatherDetail
