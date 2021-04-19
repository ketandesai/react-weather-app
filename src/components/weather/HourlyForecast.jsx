import React from 'react'
import styled from 'styled-components/macro'
import TimeComponent from '../time/TimeComponent'
import { Temperature } from './Temperature'
import { selectHourlyWeather } from '../../reducers/weatherSlice'
import { useSelector } from 'react-redux'
import { Accumulation } from './Accumulation'
import { DEVICES, WEIGHTS, GRADIENTS } from '../styles/constants'
import OpacityIcon from '@material-ui/icons/Opacity'
import Spacer from '../spacer/Spacer'
import Image from '../image/Image'

const HourlyForecast = ({ theme }) => {
  const weather = useSelector(selectHourlyWeather)
  const color = theme === 'light' ? 'primary' : 'inherit'
  const style = {
    '--background': GRADIENTS[theme],
  }

  let content = weather?.map((data) => (
    <HourWrapper key={data?.dt} style={style}>
      <TimeWrapper>
        <TimeComponent seconds={data?.dt} options={{ hour: 'numeric' }} />
      </TimeWrapper>
      <Image
        src={`https://openweathermap.org/img/wn/${data?.weather[0]?.icon}.png`}
        alt={`${data?.weather[0].description}`}
      />

      <Row>
        {data?.pop ? (
          <div>
            <OpacityIcon color={color} fontSize="small" />
            {Math.round(data?.pop * 100)} %
          </div>
        ) : (
          <Spacer size={12} />
        )}
        {data?.rain ? (
          <Accumulation
            rain={data?.rain ? data?.rain['1h'] : 0}
            snow={data?.snow ? data?.snow['1h'] : 0}
          />
        ) : (
          <Spacer size={12} />
        )}
      </Row>

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
const TimeWrapper = styled.span`
  font-weight: ${WEIGHTS.bold};
`

const TempWrapper = styled.div`
  font-weight: ${WEIGHTS.bold};
`

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 16px;
  @media (min-width: ${DEVICES.tablet}) {
    gap: 4px;
    font-size: 0.9rem;
  }
`
export default HourlyForecast
