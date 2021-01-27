import React, { useEffect, useState } from "react";
import "./WeatherPage.css";
import { OPEN_WEATHER_BASE_URL} from "../../api/config.js";
import {
  fetchWeather,
  selectCurrentWeather
} from "../../reducers/weatherSlice";
import { fetchLocation, selectLocation } from "../../reducers/locationSlice";
import { useDispatch, useSelector } from "react-redux";
import { WeatherDetail } from "./WeatherDetail";
import { MinutelyForecast } from "./MinutelyForecast";
import { HourlyForecast } from "./HourlyForecast";
import { DailyForecast } from "./DailyForecast";
import { WeatherAlert } from "./WeatherAlert";
import { Autocompleter } from "../search/Autocompleter";

export const WeatherPage = () => {
  const dispatch = useDispatch();
  // units are "imperial" for Farenheight, "metric" for Celcius
  const [units, setUnits] = useState("imperial");
  const location = useSelector(selectLocation);
  const currentWeather = useSelector(selectCurrentWeather);

  useEffect(() => {
    if (!location) {
      dispatch(fetchLocation());
    } else {
      let allWeatherUrl = `${OPEN_WEATHER_BASE_URL}/data/2.5/onecall?lat=${location.lat}&lon=${location.lon}&appid=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}&units=${units}`;
      dispatch(fetchWeather(allWeatherUrl));
    }
  }, [location, units, dispatch]);

  return (
    <>
      <div className="search">
        <Autocompleter />
      </div>
      <div className="weather">
        <WeatherDetail
          weather={currentWeather}
          units={units}
          location={location}
        />
        <MinutelyForecast />
        <div className="sm:grid-cols-2">
          <HourlyForecast />
          <DailyForecast />
        </div>
      </div>
      <WeatherAlert />
      
    </>
  );
};
