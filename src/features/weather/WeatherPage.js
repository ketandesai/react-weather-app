import React, { useEffect, useState } from "react";
import { WeatherCard } from "./WeatherCard";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import { CitySelector } from "./CitySelector";
import styles from "./WeatherPage.css";
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
        <Container className={styles.WeatherPage}>
          <div className="bg-gradient-to-r from-green-400 to-blue-500"></div>
          <CityCompleter />
        </Container>
      </div>
      <div class="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
        <div class="relative py-3 sm:max-w-xl sm:mx-auto">
          <div class="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>

          <div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
            <div class="max-w-md mx-auto">
              <div class="flex-row">
                <WeatherDetail
                  weather={currentWeather}
                  units={units}
                  location={location}
                />
              </div>
              <div class="divide-y divide-gray-200">
                <div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                  <DailyForecast />
                  <ul class="list-disc space-y-2">
                    <li class="flex items-start">
                      <span class="h-6 flex items-center sm:h-7">
                        <svg
                          class="flex-shrink-0 h-5 w-5 text-blue-500"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </span>
                      <p class="ml-2">
                        Customizing your
                        <code class="text-sm font-bold text-gray-900">
                          tailwind.config.js
                        </code>{" "}
                        file
                      </p>
                    </li>
                    <li class="flex items-start">
                      <span class="h-6 flex items-center sm:h-7">
                        <svg
                          class="flex-shrink-0 h-5 w-5 text-cyan-500"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </span>
                      <p class="ml-2">
                        Extracting classes with
                        <code class="text-sm font-bold text-gray-900">
                          @apply
                        </code>
                      </p>
                    </li>
                    <li class="flex items-start">
                      <span class="h-6 flex items-center sm:h-7">
                        <svg
                          class="flex-shrink-0 h-5 w-5 text-cyan-500"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </span>
                      <p class="ml-2">Code completion with instant preview</p>
                    </li>
                  </ul>
                  <p>
                    Perfect for learning how the framework works, prototyping a
                    new idea, or creating a demo to share online.
                  </p>
                </div>
                <div class="pt-6 text-base leading-6 font-bold sm:text-lg sm:leading-7">
                  <p>Want to dig deeper into Tailwind?</p>
                  <p>
                    <a
                      href="https://tailwindcss.com/docs"
                      class="text-cyan-600 hover:text-cyan-700"
                    >
                      {" "}
                      Read the docs &rarr;{" "}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Container>
        <h3>Daily Forecast</h3>

        <h3>Hourly Forecast</h3>
        <HourlyForecast />
        <h3>Minutely Forecast</h3>
        <MinutelyForecast />
        <WeatherAlert />
      </Container>
    </>
  );
};
