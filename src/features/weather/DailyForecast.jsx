import React from "react";
import { Media } from "react-bootstrap";
import { TimeDateComponent } from "./TimeDateComponent";
import { Temperature } from "./Temperature";
import { selectDailyWeather } from "./weatherSlice";
import { useSelector } from "react-redux";
import { Accumulation } from "./Accumulation";

export const DailyForecast = () => {
  const weather = useSelector(selectDailyWeather);
  let units = "imperial";
  let options = { weekday: "short" };
  let content = weather?.map((data) => (
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
              showDate={true}
              showTime={false}
              options={options}
            />
          </b>
        </h5>
        <div>
          <h5>
            <Temperature degrees={data?.temp.max} units={units} />
            {" / "}
            <Temperature degrees={data?.temp.min} units={units} />
          </h5>
          {data?.weather[0].description}
        </div>
        {data?.rain > 0 ? <Accumulation amount={data?.rain} /> : ""}
        {data?.snow > 0 ? <Accumulation amount={data?.snow} /> : ""}
        {data?.pop > 0 ? <div>{data?.pop * 100} %</div> : ""}
      </Media.Body>
    </Media>
  ));

  return <div class="flex flex-row">{content}</div>;
};
