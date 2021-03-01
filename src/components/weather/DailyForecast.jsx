import React from 'react'
import { DateComponent } from './DateComponent'
import { Temperature } from './Temperature'
import { selectDailyWeather } from '../../reducers/weatherSlice'
import { useSelector } from 'react-redux'
import { Accumulation } from './Accumulation'

export const DailyForecast = () => {
  const weather = useSelector(selectDailyWeather)
  let options = { weekday: 'short' }
  let content = weather?.map((data) => (
    <div key={data.dt} className="container mx-auto">
      <b>
        <DateComponent seconds={data?.dt} options={options} />
      </b>
      <img
        className="float-left"
        src={`https://openweathermap.org/img/wn/${data?.weather[0]?.icon}.png`}
        alt=""
      />

      <div>
        <Temperature degrees={data?.temp.max} showSymbol={true} />{' '}
        <Temperature degrees={data?.temp.min} showSymbol={true} />
      </div>

      <div className="float-left">{data?.weather[0].description}</div>
      <br />
      {data?.pop > 0 ? (
        <div className="float-right">{Math.round(data?.pop * 100)} %</div>
      ) : (
        ''
      )}
      <div className="float-right">
        <Accumulation rain={data?.rain} snow={data?.snow} />
      </div>
    </div>
  ))
  //removes weather for today, since it is redundant
  let firstDay = content?.shift()
  return (
    <div className="grid md:grid-cols-7 gap-3 divide-y md:divide-x md:divide-y-0">
      {content}
    </div>
  )
}
