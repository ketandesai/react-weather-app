import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DateComponent } from './DateComponent'
import { TimeComponent } from './TimeComponent'
import { Temperature } from './Temperature'
import { MinutelyForecast } from './MinutelyForecast'
import Toggle from 'react-toggle'
import { RiCelsiusFill, RiFahrenheitFill } from 'react-icons/ri'
import {
  selectCurrentWeather,
  selectUnits,
  unitsUpdated,
} from '../../reducers/weatherSlice'
import { selectLocation } from '../../reducers/locationSlice'

export const WeatherDetail = () => {
  const dispatch = useDispatch()
  const units = useSelector(selectUnits)
  const weather = useSelector(selectCurrentWeather)
  const location = useSelector(selectLocation)
  let region = location?.region ? `, ${location.region}` : ''
  let country = location?.country ? `, ${location.country}` : ''

  const onUnitsChanged = () => {
    units === 'imperial'
      ? dispatch(unitsUpdated('metric'))
      : dispatch(unitsUpdated('imperial'))
  }

  return (
    <>
      <div>
        <b>
          {location?.city}
          {region}
          {country}
        </b>
        <br></br>
        <DateComponent seconds={weather?.dt} /> |{' '}
        <TimeComponent seconds={weather?.dt} />
      </div>
      <div>
        <Toggle
          icons={{
            checked: <RiFahrenheitFill />,
            unchecked: <RiCelsiusFill />,
          }}
          onChange={onUnitsChanged}
        />
      </div>
      <div className="sm:flex-col md:flex md:flex-row justify-between my-2 px-6 sm:mt-5 sm:mb-5 sm:px-4">
        <div className="flex-col sm:w-full lg:w-1/2">
          <div className="flex flex-row justify-center sm:justify-start sm:items-center">
            <div className="flex flex-col justify-center items-center">
              <img
                src={`https://openweathermap.org/img/wn/${weather?.weather[0]?.icon}@2x.png`}
                alt=""
              />
              <p className="hidden sm:flex sm:flex-no-wrap font-medium -mt-2 ml-3 capitalize">
                {weather?.weather[0].description}
              </p>
            </div>

            <div className="flex">
              <span className="text-6xl font-bold">
                <Temperature degrees={weather?.temp} />{' '}
              </span>
              <span>
                {' '}
                {units === 'imperial' ? (
                  <RiFahrenheitFill />
                ) : (
                  <RiCelsiusFill />
                )}
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center sm:mt-6 sm:w-full lg:w-1/2">
          <div className="text-sm sm:text-lg ml-8 mt-3 sm:mt-0">
            <div className="flex">
              Feels like:{'  '}
              <span className="flex font-bold">
                <Temperature degrees={weather?.feels_like} showUnits={true} />
              </span>
            </div>
            <br />
            <span>
              <MinutelyForecast />
            </span>
          </div>
        </div>
      </div>
    </>
  )
}
