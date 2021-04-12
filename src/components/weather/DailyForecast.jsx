import React from 'react'
import DateComponent from '../time/DateComponent'
import styled from 'styled-components/macro'
import { Temperature } from './Temperature'
import { selectDailyWeather } from '../../reducers/weatherSlice'
import { useSelector } from 'react-redux'
import { Accumulation } from './Accumulation'
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
    <DailyWrapper key={data.dt}>
      <b>
        <DateComponent seconds={data?.dt} options={options} />
      </b>
      <img
        src={`https://openweathermap.org/img/wn/${data?.weather[0]?.icon}.png`}
        alt=""
      />

      <Row>
        <Temperature degrees={data?.temp.max} showSymbol={true} />
        <Temperature degrees={data?.temp.min} showSymbol={true} />
      </Row>
      <Row>
        {data?.pop > 0 ? <div>{Math.round(data?.pop * 100)} %</div> : '88 %'}
        <div>
          <Accumulation rain={data?.rain} snow={data?.snow} />
        </div>
      </Row>
    </DailyWrapper>
  ))
  //removes weather for today, since it is redundant
  let firstDay = content?.shift()
  return <Wrapper>{content}</Wrapper>
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: ${DEVICES.tablet}) {
    flex-direction: row;
    justify-content: space-between;
  }
`

const DailyWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;

  /* For tablets and larger devices */
  @media (min-width: ${DEVICES.tablet}) {
    flex-direction: column;
    align-items: center;
  }
`

const Row = styled.div`
  /* For tablets and larger devices */
  display: flex;
  justify-content: space-between;
  gap: 16px;
  @media (min-width: ${DEVICES.tablet}) {
  }
`

export default DailyForecast
