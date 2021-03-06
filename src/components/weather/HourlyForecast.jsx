import React from 'react'
import styled from 'styled-components'
import TimeComponent from '../time/TimeComponent'
import { Temperature } from './Temperature'
import { selectHourlyWeather } from '../../reducers/weatherSlice'
import { useSelector } from 'react-redux'
import { Accumulation } from './Accumulation'
import { TimeContainer } from '../styles/TimeContainer'
import { DEVICES } from '../styles/constants'

const Hour = styled.div`
  grid-area: hour1;
`

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;

  /* For tablets and larger devices */
  @media (min-width: ${DEVICES.tablet}) {
    flex-direction: column;
    align-content: stretch;
  }
`
const Item = styled.div`
  width: 6ch;
  align-items: center;
`

const HourlyForecast = () => {
  const weather = useSelector(selectHourlyWeather)

  let content = weather?.map((data, index) => (
    <Hour key={data?.dt} style={{ gridArea: 'hour' + index }}>
      <Container>
        <Item>
          <b>
            <TimeComponent seconds={data?.dt} options={{ hour: 'numeric' }} />
          </b>
        </Item>
        <div>
          <img
            src={`https://openweathermap.org/img/wn/${data?.weather[0]?.icon}.png`}
            alt={`${data?.weather[0].description}`}
          />
        </div>
        <div>
          <Temperature degrees={data?.temp} showSymbol={true} />
        </div>
        <div>
          {data?.pop ? <div> {Math.round(data?.pop * 100)} %</div> : '88%'}
        </div>
        <div>
          {data?.rain ? (
            <Accumulation
              rain={data?.rain ? data?.rain['1h'] : 0}
              snow={data?.snow ? data?.snow['1h'] : 0}
            />
          ) : (
            '12 in'
          )}
        </div>
      </Container>
    </Hour>
  ))
  return (
    <>
      <TimeContainer time="hour">{content?.slice(1, 8)}</TimeContainer>
    </>
  )
}

export default HourlyForecast
