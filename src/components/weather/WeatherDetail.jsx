import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import DateComponent from '../time/DateComponent'
import TimeComponent from '../time/TimeComponent'
import { Temperature } from './Temperature'
import { MinutelyForecast } from './MinutelyForecast'
import Toggle from 'react-toggle'
import DegreeIcon from '../icon/DegreeIcon'
import {
  selectCurrentWeather,
  selectUnits,
  unitsUpdated,
} from '../../reducers/weatherSlice'
import LocationInfo from '../location/LocationInfo'
import { RiCelsiusFill, RiFahrenheitFill } from 'react-icons/ri'
import styled from 'styled-components/macro'
import { WEIGHTS, DEVICES } from '../styles/constants'

const WeatherDetail = () => {
  const dispatch = useDispatch()
  const units = useSelector(selectUnits)
  const weather = useSelector(selectCurrentWeather)

  const onUnitsChanged = () => {
    units === 'imperial'
      ? dispatch(unitsUpdated('metric'))
      : dispatch(unitsUpdated('imperial'))
  }

  return (
    <>
      <Wrapper>
        <LocationWrapper>
          <div>
            <LocationInfo />
          </div>
          <div>
            <DateComponent seconds={weather?.dt} /> |{' '}
            <TimeComponent seconds={weather?.dt} />
          </div>
          <div>
            <Toggle
              checked={units === 'metric'}
              icons={{
                checked: <DegreeIcon iconType={'F'} />,
                unchecked: <DegreeIcon iconType={'C'} />,
              }}
              onChange={onUnitsChanged}
            />
          </div>
        </LocationWrapper>

        <DetailWrapper>
          <Row>
            <div>
              {weather ? (
                <img
                  src={`https://openweathermap.org/img/wn/${weather?.weather[0]?.icon}@2x.png`}
                  alt={weather?.weather[0].description}
                />
              ) : (
                ''
              )}
              <WeatherDescription>
                {weather?.weather[0].description}
              </WeatherDescription>
            </div>
            <div>
              <TempWrapper>
                <TemperatureTitle>
                  <Temperature degrees={weather?.temp} />{' '}
                </TemperatureTitle>
                <div>
                  {units === 'imperial' ? (
                    <RiFahrenheitFill />
                  ) : (
                    <RiCelsiusFill />
                  )}
                </div>
              </TempWrapper>
              <FeelsLikeWrapper>
                <i>feels like </i>
                <Temperature degrees={weather?.feels_like} showUnits={true} />
              </FeelsLikeWrapper>
            </div>
          </Row>

          <MinuteWrapper>
            <MinutelyForecast />
          </MinuteWrapper>
        </DetailWrapper>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin: 10px;
  grid-template-rows: repeat(3, auto);
`

const LocationWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`

const DetailWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: ${DEVICES.tablet}) {
    flex-direction: row;
  }
`

const TempWrapper = styled.div`
  display: flex;
`

const TemperatureTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: ${WEIGHTS.bold};
`

const Row = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-evenly;
  gap: 8px;
`

const WeatherDescription = styled.div`
  margin-top: -32px;
`

const FeelsLikeWrapper = styled.div`
  margin-top: 12px;
`

const MinuteWrapper = styled.div`
  align-self: center;
`

export default WeatherDetail
