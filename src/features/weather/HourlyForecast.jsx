import React from "react";
import { TimeDateComponent } from "./TimeDateComponent";
import { Temperature } from "./Temperature";
import { selectHourlyWeather } from "./weatherSlice";
import { useSelector } from "react-redux";
import { Accumulation } from "./Accumulation";

export const HourlyForecast = () => {
  const weather = useSelector(selectHourlyWeather);
  let units = "imperial";

  let content = weather?.map((data) => (
    <div key={data?.dt}>
      <span>
        <b>
          <TimeDateComponent
            seconds={data?.dt}
            showDate={false}
            showTime={true}
            options={null}
          />
        </b>
        <img
          src={`https://openweathermap.org/img/wn/${data?.weather[0]?.icon}.png`}
          alt={`${data?.weather[0].description}`}
        />
      </span>
      <br />
      <span>
        <Temperature degrees={data?.temp} units={units} />
      </span>
      <span>
        {data?.pop ? <div> {Math.round(data?.pop * 100)} %</div> : ""}
        {data?.rain ? <Accumulation amount={data?.rain["1h"]} /> : ""}
        {data?.snow ? <Accumulation amount={data?.snow["1h"]} /> : ""}
      </span>
    </div>
  ));
  return (
    <div className="grid md:grid-cols-7 sm:grid-cols-1 gap-3">
      {content?.slice(1, 8)}
    </div>
  );
};
