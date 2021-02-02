import React from 'react'
import { TimeDateComponent } from './TimeDateComponent'
import { selectWeatherAlerts } from '../../reducers/weatherSlice'
import { useSelector } from 'react-redux'

export const WeatherAlert = () => {
  const weather = useSelector(selectWeatherAlerts)

  let content = weather?.map((alert, index) => (
    <div
      key={`${alert.event}_${index}`}
      class="border border-blue-300 shadow rounded-md p-4 max-w-2xl w-full mx-auto"
    >
      <div className="animate-pulse flex space-x-4">
        <div>
          <b>{alert.event}</b>
          <hr />
          <TimeDateComponent
            seconds={alert.start}
            showDate={true}
            showTime={true}
          />{' '}
          -{' '}
          <TimeDateComponent
            seconds={alert.end}
            showDate={true}
            showTime={true}
          />
          <hr />
          <span key={alert.description}>{alert.description}</span>
        </div>
      </div>
    </div>
  ))

  return <>{content}</>
}
