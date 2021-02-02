import React from 'react'
import { TimeComponent } from './TimeComponent'
import { Temperature } from './Temperature'
import { selectHourlyWeather } from '../../reducers/weatherSlice'
import { useSelector } from 'react-redux'
import { Accumulation } from './Accumulation'

export const HourlyForecast = () => {
  const weather = useSelector(selectHourlyWeather)

  let content = weather?.map((data) => (
    <div key={data?.dt} className="container mx-auto px-4 hover:shadow-md">
      <div>
        <img
          className="float-left"
          src={`https://openweathermap.org/img/wn/${data?.weather[0]?.icon}.png`}
          alt={`${data?.weather[0].description}`}
        />
        <Temperature degrees={data?.temp} showSymbol={true} />
        <div>
          {data?.pop ? <div> {Math.round(data?.pop * 100)} %</div> : ''}
        </div>
        <div>
          {data?.rain ? (
            <Accumulation
              rain={data?.rain ? data?.rain['1h'] : 0}
              snow={data?.snow ? data?.snow['1h'] : 0}
            />
          ) : (
            ''
          )}
        </div>
      </div>

      <div className="container mx-auto">
        <b>
          <TimeComponent seconds={data?.dt} options={{ hour: 'numeric' }} />
        </b>
      </div>
    </div>
  ))
  return (
    <div className="grid md:grid-cols-7 divide-y md:divide-x md:divide-y-0 gap-3">
      {content?.slice(1, 8)}
    </div>
  )
}
