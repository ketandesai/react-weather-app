import React from 'react'
import { DateComponent } from './DateComponent'
import { TimeComponent } from './TimeComponent'
import { selectWeatherAlerts } from '../../reducers/weatherSlice'
import { useSelector } from 'react-redux'

export const WeatherAlert = () => {
  const weather = useSelector(selectWeatherAlerts)

  let content = weather?.map((alert, index) => (
    <div
      key={`${alert.event}_${index}`}
      className="border border-red-300 shadow rounded-md p-4 max-w-2xl w-full mx-auto"
    >
      <div className="animate-pulse flex space-x-4">
        <div className="rounded-full bg-red-400 h-12 w-12"></div>
        <div className="flex-1 space-y-4 py-1">
          <b>{alert.event}</b>
          <div>
            <DateComponent seconds={alert.start} />{' '}
            <TimeComponent seconds={alert.start} /> -{' '}
            <DateComponent seconds={alert.end} />{' '}
            <TimeComponent seconds={alert.end} />{' '}
          </div>
          <hr />
          <span key={alert.description}>{alert.description}</span>
        </div>
      </div>
    </div>
  ))

  return <>{content}</>
}
