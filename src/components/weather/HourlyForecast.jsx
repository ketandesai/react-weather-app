import React from "react";
import { TimeDateComponent } from "./TimeDateComponent";
import { Temperature } from "./Temperature";
import { selectHourlyWeather } from "../../reducers/weatherSlice";
import { useSelector } from "react-redux";
import { Accumulation } from "./Accumulation";

export const HourlyForecast = () => {
  const weather = useSelector(selectHourlyWeather);
  let units = "imperial";

  let content = weather?.map((data) => (
    <div key={data?.dt}>
      <div>
        <img
          src={`https://openweathermap.org/img/wn/${data?.weather[0]?.icon}.png`}
          alt={`${data?.weather[0].description}`}
        />
      </div>
      <p>
        <Temperature degrees={data?.temp} units={units} />
      </p>
      <p>
        {data?.pop ? <div> {Math.round(data?.pop * 100)} %</div> : " ."}
      </p>
      <p> 
        {data?.rain ? <Accumulation rain={data?.rain ? data?.rain["1h"] : 0} snow={data?.snow ? data?.snow["1h"] : 0}/> : " ."}
      </p>
      <p>
        <b>
          <TimeDateComponent
            seconds={data?.dt}
            showDate={false}
            showTime={true}
            options={null}
          />
        </b>
      </p>
    </div>
  ));
  return (
    <div className="grid md:grid-cols-7 sm:grid-cols-1 gap-3">
      {content?.slice(1, 8)}
    </div>
  );
};
