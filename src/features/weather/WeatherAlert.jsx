import React from "react";
import { TimeDateComponent } from "./TimeDateComponent";
import { selectWeatherAlerts } from "./weatherSlice";
import { useSelector } from "react-redux";
import { Table } from "react-bootstrap";

export const WeatherAlert = () => {
  const weather = useSelector(selectWeatherAlerts);

  let content = weather?.map((alert, index) => (
    <div key={alert.event}>
      <span>{alert.event}</span>
      <br />
      <TimeDateComponent
        seconds={alert.start}
        showDate={true}
        showTime={true}
      />{" "}
      -{" "}
      <TimeDateComponent seconds={alert.end} showDate={true} showTime={true} />
      <br />
      <span key={alert.description}>{alert.description}</span>
    </div>
  ));

  return <>{content}</>;
};
