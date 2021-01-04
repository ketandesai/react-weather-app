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
    <Media key={data.dt}>
      <img
        width={100}
        height={100}
        className="mr-3"
        src={`https://openweathermap.org/img/wn/${data?.weather[0].icon}@2x.png`}
        alt="Generic placeholder"
      />
      <Media.Body>
        <h5>
          <b>
            <TimeDateComponent
              seconds={data?.dt}
              showDate={false}
              showTime={true}
              options={null}
            />
          </b>
        </h5>
        <div>
          <h1>
            <Temperature degrees={data?.temp} units={units} />
          </h1>
        </div>
        {data?.pop ? <div> {data?.pop * 100} %</div> : ""}

        {data?.rain ? <Accumulation amount={data?.rain["1h"]} /> : ""}
        {data?.snow ? <Accumulation amount={data?.snow["1h"]} /> : ""}
      </Media.Body>
    </Media>
  ));

  return <>{content}</>;
};
