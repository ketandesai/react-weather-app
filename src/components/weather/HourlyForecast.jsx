import React from 'react'
import styled from 'styled-components/macro'
import TimeComponent from '../time/TimeComponent'
import { Temperature } from './Temperature'
import { selectHourlyWeather } from '../../reducers/weatherSlice'
import { useSelector } from 'react-redux'
import { Accumulation } from './Accumulation'
import { DEVICES } from '../styles/constants'

const HourlyForecast = () => {
  const weather = useSelector(selectHourlyWeather)

  let content = weather?.map((data, index) => (
    <HourWrapper key={data?.dt}>
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
      <Row>
        {data?.pop ? <div> {Math.round(data?.pop * 100)} %</div> : '88%'}
        <div>
          {data?.rain ? (
            <Accumulation
              rain={data?.rain ? data?.rain['1h'] : 0}
              snow={data?.snow ? data?.snow['1h'] : 0}
            />
          ) : (
            <div></div>
          )}
        </div>
      </Row>
    </HourWrapper>
  ))
  return <Wrapper>{content?.slice(1, 8)}</Wrapper>
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
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

  /* For tablets and larger devices */
  @media (min-width: ${DEVICES.tablet}) {
    flex-direction: column;
    align-items: center;
  }
`
const Item = styled.div`
  width: 6ch;
  align-items: center;
`

const Row = styled.div`
  /* For tablets and larger devices */
  display: flex;
  justify-content: space-between;
  gap: 16px;
  @media (min-width: ${DEVICES.tablet}) {
  }
`

const ImageWrapper = styled.div`
  position: relative;
`

const Image = styled.img`
  width: 100%;
  border-radius: 16px 16px 4px 4px;
`

export default HourlyForecast
