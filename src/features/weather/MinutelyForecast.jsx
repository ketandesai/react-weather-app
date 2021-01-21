import React from "react";
import { selectMinutelyWeather } from "./weatherSlice";
import { useSelector } from "react-redux";

export const MinutelyForecast = () => {
  const weather = useSelector(selectMinutelyWeather);
  let initialValue = 0;
  let sum = weather?.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue.precipitation;
  }, initialValue);

  let content = "No precipitation in the next hour";
  if (sum > 0) {
    let precipitation = Number.parseFloat(sum / 25.4).toFixed(1);
    content = `${precipitation} in the next hour`;
  }
  return <>{content}</>;
};
