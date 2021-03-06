import React from 'react'
import DateComponent from '../time/DateComponent'
import styled from 'styled-components'
import { Temperature } from './Temperature'
import { selectDailyWeather } from '../../reducers/weatherSlice'
import { useSelector } from 'react-redux'
import { Accumulation } from './Accumulation'
import { TimeContainer } from '../styles/TimeContainer'
import { DEVICES } from '../styles/constants'

const Day = styled.div`
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
  }
`
const Item = styled.div`
  width: 6ch;
  align-items: center;
`

const DailyForecast = () => {
  const weather = useSelector(selectDailyWeather)
  let options = { weekday: 'short' }
  let content = weather?.map((data, index) => (
    <Day key={data.dt} style={{ gridArea: 'day' + index }}>
      <Container>
        <b>
          <DateComponent seconds={data?.dt} options={options} />
        </b>
        <img
          src={`https://openweathermap.org/img/wn/${data?.weather[0]?.icon}.png`}
          alt=""
        />

        <div>
          <Temperature degrees={data?.temp.max} showSymbol={true} />{' '}
          <Temperature degrees={data?.temp.min} showSymbol={true} />
        </div>

        {data?.pop > 0 ? (
          <div className="float-right">{Math.round(data?.pop * 100)} %</div>
        ) : (
          '88 %'
        )}
        <div className="float-right">
          <Accumulation rain={data?.rain} snow={data?.snow} /> 12 in
        </div>
      </Container>
    </Day>
  ))
  //removes weather for today, since it is redundant
  let firstDay = content?.shift()
  return (
    <>
      <TimeContainer time="day">{content}</TimeContainer>
    </>
  )
}

export default DailyForecast
