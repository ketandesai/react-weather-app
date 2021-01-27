import React from "react";
import { TimeDateComponent } from "./TimeDateComponent";
import { Temperature } from "./Temperature";
import { selectDailyWeather } from "../../reducers/weatherSlice";
import { useSelector } from "react-redux";
import { Accumulation } from "./Accumulation";

export const DailyForecast = () => {
  const weather = useSelector(selectDailyWeather);
  let units = "imperial";
  let options = { weekday: "short" };
  let content = weather?.map((data) => (
    <div key={data.dt}>
      <b>
        <TimeDateComponent
          seconds={data?.dt}
          showDate={true}
          showTime={false}
          options={options}
        />
      </b>
      <img
        className="mr-3"
        src={`https://openweathermap.org/img/wn/${data?.weather[0].icon}.png`}
        alt=""
      />

      <br />
      <span>{data?.weather[0].description}</span>

      <div>
        <Temperature degrees={data?.temp.max} units={units} />
        {" - "}
        <Temperature degrees={data?.temp.min} units={units} />
      </div>
      {data?.rain > 0 ? <Accumulation amount={data?.rain} /> : ""}
      <br />
      {data?.snow > 0 ? <Accumulation amount={data?.snow} /> : ""}
      {data?.pop > 0 ? <div>{Math.round(data?.pop * 100)} %</div> : ""}
    </div>
  ));
  //removes weather for today, since it is redundant
  let firstDay = content?.shift();
  return (
    <div className="grid md:grid-cols-7 sm:grid-cols-1 gap-3">{content}</div>
  );
};
