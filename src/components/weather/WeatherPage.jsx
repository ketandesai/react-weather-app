import React, { useEffect } from 'react'
import './WeatherPage.css'
import { fetchWeather, selectUnits } from '../../reducers/weatherSlice'
import { fetchLocation, selectLocation } from '../../reducers/locationSlice'
import { useDispatch, useSelector } from 'react-redux'
import { WeatherDetail } from './WeatherDetail'
import { HourlyForecast } from './HourlyForecast'
import { DailyForecast } from './DailyForecast'
import { WeatherAlert } from './WeatherAlert'
import { Autocompleter } from '../search/Autocompleter'

export const WeatherPage = () => {
  const dispatch = useDispatch()
  const location = useSelector(selectLocation)
  const units = useSelector(selectUnits)
  useEffect(() => {
    if (!location) {
      dispatch(fetchLocation())
    } else {
      dispatch(
        fetchWeather({ lat: location.lat, lon: location.lon, units: units })
      )
    }
  }, [location, units, dispatch])

  return (
    <>
      <Autocompleter />
      <div className="weather">
        <WeatherDetail />
        <div className="grid gap-2 grid-cols-2 md:grid-cols-1 divide-x md:divide-x-0 md:divide-y">
          <HourlyForecast />
          <DailyForecast />
        </div>
      </div>
      <WeatherAlert />
    </>
  )
}
