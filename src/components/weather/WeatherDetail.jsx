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
import styled from 'styled-components'

const WeatherDetail = () => {
  const dispatch = useDispatch()
  const units = useSelector(selectUnits)
  const weather = useSelector(selectCurrentWeather)

  const onUnitsChanged = () => {
    units === 'imperial'
      ? dispatch(unitsUpdated('metric'))
      : dispatch(unitsUpdated('imperial'))
  }

  const Container = styled.div`
    display: grid;
    gap: 4px;
    margin: 10px;
    grid-template-rows: repeat(3, auto);
  `

  return (
    <>
      <Container>
        <div>
          <div className="alignleft">
            <LocationInfo />
          </div>
          <div className="alignright">
            <Toggle
              checked={units === 'metric'}
              icons={{
                checked: <DegreeIcon iconType={'F'} />,
                unchecked: <DegreeIcon iconType={'C'} />,
              }}
              onChange={onUnitsChanged}
            />
          </div>
        </div>

        <div>
          <DateComponent seconds={weather?.dt} /> |{' '}
          <TimeComponent seconds={weather?.dt} />
        </div>

        <div className="wrapper">
          <div className="temp">
            <div>
              {weather ? (
                <img
                  src={`https://openweathermap.org/img/wn/${weather?.weather[0]?.icon}@2x.png`}
                  alt=""
                />
              ) : (
                ''
              )}
            </div>
            <div>
              <div>
                <h1>
                  <Temperature degrees={weather?.temp} />{' '}
                  {units === 'imperial' ? (
                    <RiFahrenheitFill />
                  ) : (
                    <RiCelsiusFill />
                  )}
                </h1>
              </div>
              <div>{weather?.weather[0].description}</div>
            </div>
          </div>

          <div className="precipitation">
            <div>
              Feels like:{' '}
              <Temperature degrees={weather?.feels_like} showUnits={true} />
            </div>
            <div>
              <MinutelyForecast />
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default WeatherDetail
