import React, { useEffect, useState } from "react";
import { WeatherCard } from "./WeatherCard";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import { CitySelector } from "./CitySelector";
import "./WeatherPage.css";
import { API_BASE_URL, API_KEY } from "../../api/config.js";

import {
  fetchWeather,
  selectCurrentWeather,
  selectStatus,
  selectError
} from "./weatherSlice";

import { fetchLocation, selectLocation } from "./locationSlice";
import { useDispatch, useSelector } from "react-redux";
import { TimeDateComponent } from "./TimeDateComponent";
import { Temperature } from "./Temperature";
import { WeatherDetail } from "./WeatherDetail";
import { MinutelyForecast } from "./MinutelyForecast";
import { HourlyForecast } from "./HourlyForecast";
import { DailyForecast } from "./DailyForecast";
import { WeatherAlert } from "./WeatherAlert";
import { fetchForward } from "./geocodeSlice";
import { CityCompleter } from "../components/CityCompleter";

export const WeatherPage = () => {
  const dispatch = useDispatch();
  const [url, setUrl] = useState("");
  // units are "imperial" for Farenheight, "metric" for Celcius
  const [units, setUnits] = useState("imperial");
  const status = useSelector(selectStatus);
  const error = useSelector(selectError);
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

  let content;
  if (status === "loading") {
    content = <Spinner animation="border" variant="primary" />;
  } else if (status === "succeeded") {
    content = (
      <Col>
        <WeatherCard
          date_timestamp={currentWeather?.dt}
          units={units}
          temp={currentWeather?.temp}
          location={location}
          min_temp={currentWeather?.temp_min}
          max_temp={currentWeather?.temp_max}
          feels_like={currentWeather?.feels_like}
          main={currentWeather?.weather[0].main}
          description={currentWeather?.weather[0].description}
          icon={currentWeather?.weather[0].icon}
        />
      </Col>
    );

    /*content = forecast?.map((data, index) => (
      <Col key={data.dt + " " + index}>
        <WeatherCard
          date_timestamp={data.dt * 1000}
          units={units}
          min_temp={data.main?.temp_min}
          max_temp={data.main?.temp_max}
          feels_like={data.main?.feels_like}
          main={data.weather[0].main}
          description={data.weather[0].description}
          icon={data.weather[0].icon}
        />
      </Col>
    ));*/
  } else if (status === "failed") {
    content = <div>{error}</div>;
  }

  const onUnitsChanged = (unit) => {
    let allWeatherUrl = `${API_BASE_URL}/data/2.5/onecall?lat=${location.lat}&lon=${location.lon}&appid=${API_KEY}&units=${units}`;
    setUrl(allWeatherUrl);
  };

  const searchCity = (city) => {
    console.log("searching city " + city);
    dispatch(fetchForward(city));
    let allWeatherUrl = `${API_BASE_URL}/data/2.5/onecall?lat=${location.lat}&lon=${location.lon}&appid=${API_KEY}&units=${units}`;
    setUrl(allWeatherUrl);
  };

  return (
    <>
      <div class="bg-gray-100 justify-center">
        <Container className="WeatherPage">
          <CityCompleter />
        </Container>
      </div>

      <div className="weather">
        <WeatherDetail
          weather={currentWeather}
          units={units}
          location={location}
        />
        <div>
          <DailyForecast />
        </div>
        <div>
          <HourlyForecast />
        </div>
      </div>

      <Container>
        <h3>Minutely Forecast</h3>
        <MinutelyForecast />
        <WeatherAlert />
      </Container>
    </>
  );
};
