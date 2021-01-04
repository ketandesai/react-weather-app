import React from "react";
import { Media } from "react-bootstrap";
import { TimeDateComponent } from "./TimeDateComponent";
import { Temperature } from "./Temperature";
import { Accumulation } from "./Accumulation";

export const WeatherDetail = ({ weather, location, units }) => {
  let region = location?.region ? `, ${location.region}` : "";
  let country = location?.country ? `, ${location.country}` : "";
  return (
    <Media>
      <img
        width={100}
        height={100}
        className="mr-3"
        src={`https://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`}
        alt="Generic placeholder"
      />
      <Media.Body>
        <h5>
          {location?.city}
          {region}
          {country}
          <br></br>
          <TimeDateComponent
            seconds={weather?.dt}
            showDate={true}
            showTime={true}
          />
        </h5>
        <div>
          <h1>
            <Temperature degrees={weather?.temp} units={units} />
          </h1>
        </div>
        <div>
          <b>
            Feels like{" "}
            <Temperature degrees={weather?.feels_like} units={units} />,{" "}
            {weather?.weather[0].description}
          </b>
        </div>
        {weather?.rain ? <Accumulation amount={weather?.rain["1h"]} /> : ""}
        {weather?.snow ? <Accumulation amount={weather?.snow["1h"]} /> : ""}

        {/* 
        <div>
          Sunrise:{" "}
          <TimeDateComponent
            seconds={weather?.sunrise}
            showDate={false}
            showTime={true}
          />
        </div>
        <div>
          Sunset:{" "}
          <TimeDateComponent
            seconds={weather?.sunset}
            showDate={false}
            showTime={true}
          />
        </div>
        <div>
          Temp:
          <Temperature degrees={weather?.temp} units={units} />
        </div>
        
        <div>
          Atmospheric pressure on the sea level, {weather?.pressure} hPa
        </div>
        <div>Humidity: {weather?.humidity} %</div>
        <div>
          Dew Point: Atmospheric temperature (varying according to pressure and
          humidity) below which water droplets begin to condense and dew can
          form. <Temperature degrees={weather?.dew_point} units={units} />
        </div>
        <div>Midday UV index: {weather?.uvi}</div>
        <div>Cloudiness: {weather?.clouds} %</div>
        <div>Average visibilty: {weather?.visibility} metres</div>
        <div>Wind Speed: {weather?.wind_speed} mph</div>
        <div>Wind Direction: {weather?.wind_deg} degrees</div>
        */}
      </Media.Body>
    </Media>
  );
};
