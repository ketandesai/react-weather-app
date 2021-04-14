import React from 'react'
import styled from 'styled-components/macro'
import { COLORS } from '../styles/constants'
import TemperatureToggle from '../toggle/TemperatureToggle'
import FavoriteButton from '../favorites/FavoriteButton'
import CurrentWeather from './CurrentWeather'
import CurrentInfo from './CurrentInfo'
import CurrentConditions from './CurrentConditions'

const WeatherDetail = () => {
  return (
    <>
      <Wrapper>
        <ToggleWrapper>
          <TemperatureToggle />
          <FavoriteButton />
        </ToggleWrapper>
        <CurrentWeather />
        <CurrentInfo />
        <CurrentConditions />
      </Wrapper>
    </>
  )
}

const ToggleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  margin-bottom: 16px;
  padding: 16px;
  grid-template-rows: repeat(3, auto);

  border-radius: var(--border-radius, 10px);
  background-color: ${COLORS.white};
  //background: linear-gradient(135deg, #13e2da, #9055ff);
  //background: linear-gradient(135deg, #6699ff, #000066);
  //background: linear-gradient(135deg, #b2ffda, #000066);
  //background: linear-gradient(135deg, #402662, #3900a6);
  //background: linear-gradient(135deg, #ed7b84, #9055ff);
  //background: linear-gradient(135deg, #0b63f6, #003cc5);
  //background: linear-gradient(135deg, #2f80ed, #b2ffda);
  //background: linear-gradient(135deg, #737dfe, #ffcac9);
  //background: linear-gradient(135deg, #003cc5, #000066);
  background: linear-gradient(135deg, hsl(172, 91%, 70%), hsl(196, 94%, 67%));
`

export default WeatherDetail
