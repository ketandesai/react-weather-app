import React from "react";
import { Table } from "react-bootstrap";
import { selectMinutelyWeather } from "./weatherSlice";
import { useSelector } from "react-redux";
import { TimeDateComponent } from "./TimeDateComponent";

export const MinutelyForecast = () => {
  const weather = useSelector(selectMinutelyWeather);
  let content = weather?.map((data, index) => (
    <tr key={data.dt + " " + index}>
      <td>
        <TimeDateComponent
          seconds={data.dt}
          showDate={false}
          showTime={true}
          options={null}
        />
      </td>
      <td>{data.precipitation} mm</td>
    </tr>
  ));

  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>Time</th>
          <th>Precipitation</th>
        </tr>
      </thead>
      <tbody>{content}</tbody>
    </Table>
  );
};
