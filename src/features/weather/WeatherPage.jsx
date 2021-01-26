import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import "./WeatherPage.css";
import { API_BASE_URL, API_KEY } from "../../api/config.js";

import {
  fetchWeather,
  selectCurrentWeather
} from "./weatherSlice";

import { fetchLocation, selectLocation } from "./locationSlice";
import { useDispatch, useSelector } from "react-redux";
import { WeatherDetail } from "./WeatherDetail";
import { MinutelyForecast } from "./MinutelyForecast";
import { HourlyForecast } from "./HourlyForecast";
import { DailyForecast } from "./DailyForecast";
import { WeatherAlert } from "./WeatherAlert";
import { CityCompleter } from "../components/CityCompleter";

export const WeatherPage = () => {
  const dispatch = useDispatch();
  // units are "imperial" for Farenheight, "metric" for Celcius
  const [units, setUnits] = useState("imperial");
  //const status = useSelector(selectStatus);
  const location = useSelector(selectLocation);
  const currentWeather = useSelector(selectCurrentWeather);

  useEffect(() => {
    if (!location) {
      dispatch(fetchLocation());
    } else {
      let allWeatherUrl = `${API_BASE_URL}/data/2.5/onecall?lat=${location.lat}&lon=${location.lon}&appid=${API_KEY}&units=${units}`;
      console.log(`allWeatherUrl ${allWeatherUrl}`);
      dispatch(fetchWeather(allWeatherUrl));
    }
  }, [location, units, dispatch]);

  return (
    <>
      <div className="search">
        <CityCompleter />
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

      <Container>
        <WeatherAlert />
      </Container>
    </>
  );
};
