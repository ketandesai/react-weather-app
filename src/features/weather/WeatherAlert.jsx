import React from "react";
import { TimeDateComponent } from "./TimeDateComponent";
import { selectWeatherAlerts } from "./weatherSlice";
import { useSelector } from "react-redux";
import { Table } from "react-bootstrap";

export const WeatherAlert = () => {
  const weather = useSelector(selectWeatherAlerts);

  let content = weather?.map((alert, index) => (
    <>
      <tr key={alert.event}>
        <td>{alert.event}</td>
      </tr>
      <tr key={alert.start}>
        <td>
          <TimeDateComponent
            seconds={alert.start}
            showDate={true}
            showTime={true}
          />{" "}
          -{" "}
          <TimeDateComponent
            seconds={alert.end}
            showDate={true}
            showTime={true}
          />
        </td>
      </tr>
      <tr key={alert.description}>
        <td>{alert.description}</td>
      </tr>
    </>
  ));

  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>Weather Alerts</th>
        </tr>
      </thead>
      <tbody>{content}</tbody>
    </Table>
  );
};
