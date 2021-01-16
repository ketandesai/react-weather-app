import React from "react";
import { Media } from "react-bootstrap";
import { TimeDateComponent } from "./TimeDateComponent";
import { Temperature } from "./Temperature";
import { selectHourlyWeather } from "./weatherSlice";
import { useSelector } from "react-redux";
import { Accumulation } from "./Accumulation";

export const HourlyForecast = () => {
  const weather = useSelector(selectHourlyWeather);
  let units = "imperial";

  let content = weather?.map((data, index) => (
    <div>
      <span>
        <img
          src={`https://openweathermap.org/img/wn/${data?.weather[0].icon}.png`}
          alt="Generic placeholder"
        />
        <b>
          <TimeDateComponent
            seconds={data?.dt}
            showDate={false}
            showTime={true}
            options={null}
          />
        </b>
      </span>
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

  return <div class="grid md:grid-cols-8 sm:grid-cols-1 gap-3">{content}</div>;
};
