import React, { useState } from "react";
import { Row, Col, FormControl, Button } from "react-bootstrap";

export const CitySelector = ({ onSearch, onUnitsChanged }) => {
  const [city, setCity] = useState("");
  const [unitData, setUnitData] = useState("imperial");

  const onCityChanged = (e) => setCity(e.target.value);
  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      onSearch(city);
    }
  };
  const unitChanged = () => {
    console.log("citySelector.units = " + unitData);
    let selectedUnit = unitData === "imperial" ? "metric" : "imperial";
    console.log("citySelector.unit changed = " + selectedUnit);
    setUnitData(selectedUnit);
    onUnitsChanged(selectedUnit);
  };

  const celciusOrFarenheight =
    unitData === "imperial" ? "Celcius" : "Farenheight";

  return (
    <>
      <Row>
        <Col xs={4} className="text-center">
          <FormControl
            placeholder="Search City"
            onChange={onCityChanged}
            onKeyDown={onKeyDown}
            value={city}
          />
        </Col>
      </Row>

      <Row className="text-center">
        <Col>
          <Button onClick={() => onSearch(city, unitData)}>
            Check Weather{" "}
          </Button>{" "}
          <Button onClick={unitChanged}>{celciusOrFarenheight}</Button>
        </Col>
      </Row>
    </>
  );
};
