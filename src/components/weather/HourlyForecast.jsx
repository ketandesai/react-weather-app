import React from 'react'
import styled from 'styled-components/macro'
import Temperature from './Temperature'
import { selectHourlyWeather } from '../../reducers/weatherSlice'
import { useSelector } from 'react-redux'
import { DEVICES, WEIGHTS, GRADIENTS } from '../styles/constants'
import TitleWrapper from './TitleWrapper'
import Precipitation from './Precipitation'

const HourlyForecast = ({ theme }) => {
  const weather = useSelector(selectHourlyWeather)
  const color = theme === 'light' ? 'primary' : 'inherit'
  const style = {
    '--background': GRADIENTS[theme],
  }

  let content = weather?.map((data) => (
    <HourWrapper key={data?.dt} style={style}>
      <TitleWrapper
        date={data.dt}
        icon={data?.weather[0]?.icon}
        daily={false}
      />

      <Precipitation data={data} color={color} daily={false} />

      <TempWrapper>
        <Temperature degrees={data?.temp} showSymbol={true} />
      </TempWrapper>
    </HourWrapper>
  ))
  return <Wrapper>{content?.slice(1, 8)}</Wrapper>
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 16px;
  @media (min-width: ${DEVICES.tablet}) {
    flex-direction: row;
    justify-content: space-between;
  }
`

const HourWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
  padding: 8px;
  border-radius: var(--border-radius, 10px);
  background: var(--background);

  /* For tablets and larger devices */
  @media (min-width: ${DEVICES.tablet}) {
    flex-direction: column;
    align-items: center;
    flex-basis: 125px;
  }
`

const TempWrapper = styled.div`
  font-weight: ${WEIGHTS.bold};
`

export default HourlyForecast
