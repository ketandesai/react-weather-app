import React from 'react'
import DateComponent from '../time/DateComponent'
import styled from 'styled-components/macro'
import { Temperature } from './Temperature'
import { selectDailyWeather } from '../../reducers/weatherSlice'
import { useSelector } from 'react-redux'
import { Accumulation } from './Accumulation'
import OpacityIcon from '@material-ui/icons/Opacity'
import Spacer from '../spacer/Spacer'
import { DEVICES, WEIGHTS, GRADIENTS } from '../styles/constants'
import Image from '../image/Image'

const DailyForecast = ({ theme }) => {
  const weather = useSelector(selectDailyWeather)
  const style = {
    '--background': GRADIENTS[theme],
  }
  let options = { weekday: 'short' }
  let content = weather?.map((data) => (
    <DailyWrapper key={data.dt} style={style}>
      <TitleWrapper>
        <BoldFont>
          <DateComponent seconds={data?.dt} options={options} />
        </BoldFont>
        <Spacer size={12} />
        <Image
          src={`https://openweathermap.org/img/wn/${data?.weather[0]?.icon}.png`}
          alt=""
        />
      </TitleWrapper>

      <Row>
        {data?.pop > 0 ? (
          <div>
            <OpacityIcon color="primary" fontSize="small" />
            {Math.round(data?.pop * 100)} %
          </div>
        ) : (
          <Spacer size={12} />
        )}
        <div>
          <Accumulation rain={data?.rain} snow={data?.snow} />
        </div>
      </Row>
      <TempRow>
        <BoldFont>
          <Temperature degrees={data?.temp.max} showSymbol={true} />
        </BoldFont>
        <Spacer size={2} />
        <BoldFont>
          <Temperature degrees={data?.temp.min} showSymbol={true} />
        </BoldFont>
      </TempRow>
    </DailyWrapper>
  ))
  //removes weather for today, since it is redundant
  return <Wrapper>{content?.slice(1, 8)}</Wrapper>
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  @media (min-width: ${DEVICES.tablet}) {
    flex-direction: row;
    justify-content: space-between;
  }
`

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  /* For tablets and larger devices */
  @media (min-width: ${DEVICES.tablet}) {
    flex-direction: column;
    align-items: center;
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
  @media (min-width: ${DEVICES.tablet}) {
    flex-direction: column;
    align-items: center;
    flex-basis: 125px;
  }
`

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 16px;

  /* For tablets and larger devices */

  @media (min-width: ${DEVICES.tablet}) {
    gap: 4px;
    font-size: 0.9rem;
  }
`

const TempRow = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 16px;
`

const BoldFont = styled.span`
  font-weight: ${WEIGHTS.bold};
`

export default DailyForecast
