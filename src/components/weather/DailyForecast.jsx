import React from 'react'
import styled from 'styled-components/macro'
import { selectDailyWeather } from '../../reducers/weatherSlice'
import { useSelector } from 'react-redux'
import { QUERIES, GRADIENTS } from '../styles/constants'
import TitleWrapper from './TitleWrapper'
import Precipitation from './Precipitation'
import TemperatureWrapper from './TemperatureWrapper'

const DailyForecast = ({ theme }) => {
  const weather = useSelector(selectDailyWeather)
  const color = theme === 'light' ? 'primary' : 'inherit'
  const style = {
    '--background': GRADIENTS[theme],
  }

  let content = weather?.map((data) => (
    <DailyWrapper key={data.dt} style={style}>
      <TitleWrapper date={data.dt} icon={data?.weather[0]?.icon} daily={true} />
      <Precipitation data={data} color={color} daily={true} />
      <TemperatureWrapper data={data} showSymbol={true} />
    </DailyWrapper>
  ))
  //removes weather for today, since it is redundant
  return <Wrapper>{content?.slice(1, 8)}</Wrapper>
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  @media ${QUERIES.tabletAndUp} {
    flex-direction: row;
    justify-content: space-between;
  }
`

const DailyWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
  padding: 8px;
  border-radius: var(--border-radius, 10px);
  //box-shadow: var(--box-shadow, 0px 2px 6px rgba(0, 0, 0, 0.25));
  background: var(--background);

  /* For tablets and larger devices */
  @media ${QUERIES.tabletAndUp} {
    flex-direction: column;
    align-items: center;
    flex-basis: 125px;
  }
`

export default DailyForecast
