import React from "react";
import { Card } from "react-bootstrap";
import { TimeDateComponent } from "./TimeDateComponent";
import { Temperature } from "./Temperature";

export const WeatherCard = ({
  date_timestamp,
  units,
  temp,
  location,
  min_temp,
  max_temp,
  feels_like,
  main,
  description,
  icon
}) => {
  let region = location?.region ? `, ${location.region}` : "";
  let country = location?.country ? `, ${location.country}` : "";
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src={`https://openweathermap.org/img/wn/${icon}@4x.png`}
      />
      <Card.Body>
        <Card.Title>
          <Temperature degrees={temp} units={units} />
        </Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          <div>{main}</div>
          <div>{description}</div>
          <div>
            {location?.city} {region} {country}
          </div>
          <TimeDateComponent
            seconds={date_timestamp}
            showDate={true}
            showTime={true}
          />
          <div>
            <b>
              Feels Like <Temperature degrees={feels_like} units={units} />{" "}
            </b>
          </div>
        </Card.Subtitle>
        <Card.Text></Card.Text>
      </Card.Body>
    </Card>
  );
};
