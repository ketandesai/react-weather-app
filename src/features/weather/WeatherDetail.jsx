import React from "react";
import { TimeDateComponent } from "./TimeDateComponent";
import { Temperature } from "./Temperature";
import { Accumulation } from "./Accumulation";

export const WeatherDetail = ({ weather, location, units }) => {
  let region = location?.region ? `, ${location.region}` : "";
  let country = location?.country ? `, ${location.country}` : "";
  return (
    <>
      <div>
        <b>
          {location?.city}
          {region}
          {country}
        </b>
        <br></br>
        <TimeDateComponent
          seconds={weather?.dt}
          showDate={true}
          showTime={true}
        />
      </div>
      <div className="sm:flex-col md:flex md:flex-row justify-between my-2 px-6 sm:mt-5 sm:mb-5 sm:px-4">
        <div className="flex-col sm:w-full lg:w-1/2">
          <div className="flex flex-row justify-center sm:justify-start sm:items-center">
            <div className="flex flex-col justify-center items-center">
              <img
                src={`https://openweathermap.org/img/wn/${weather?.weather[0]?.icon}@2x.png`}
                alt=""
              />
              <p className="hidden sm:flex sm:flex-no-wrap font-medium -mt-2 ml-3 capitalize">
                {weather?.weather[0].description}
              </p>
            </div>

            <div>
              <span className="text-6xl font-bold">
                <Temperature degrees={weather?.temp} units={units} />{" "}
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center sm:mt-6 sm:w-full lg:w-1/2">
          <div className="text-sm sm:text-lg ml-8 mt-3 sm:mt-0">
            Feels like:{" "}
            <span className="font-bold">
              <Temperature degrees={weather?.feels_like} units={units} />
            </span>
            <p>
              {weather?.rain ? (
                <Accumulation amount={weather?.rain["1h"]} />
              ) : (
                ""
              )}
              {weather?.snow ? (
                <Accumulation amount={weather?.snow["1h"]} />
              ) : (
                ""
              )}
            </p>
          </div>
        </div>
      </div>
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
    </>
  );
};
