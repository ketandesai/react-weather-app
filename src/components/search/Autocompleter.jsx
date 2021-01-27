import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Autocompleter.css";
import { fetchForward, selectFeatures } from "../../reducers/geocodeSlice";
import { locationUpdated } from "../../reducers/locationSlice";
import { fetchWeather } from "../../reducers/weatherSlice";
import { OPEN_WEATHER_BASE_URL} from "../../api/config.js";

const ENTER_KEY = 13;
const UP_ARROW_KEY = 38;
const DOWN_ARROW_KEY = 40;

export const Autocompleter = () => {
  const dispatch = useDispatch();
  const [activeSuggestion, setActiveSuggestion] = useState(0);
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");
  const [locationSelected, setLocationSelected] = useState("");
  const places = useSelector(selectFeatures);

  useEffect(() => {
    if (userInput) {
      dispatch(fetchForward(userInput));
      if (locationSelected && lat && lon) {
        let allWeatherUrl = `${OPEN_WEATHER_BASE_URL}/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}&units=imperial`;
        dispatch(fetchWeather(allWeatherUrl));
        dispatch(
          locationUpdated({ lat: lat, lon: lon, city: locationSelected })
        );
      }
    }
  }, [userInput, dispatch, locationSelected, lat, lon]);

  const onChange = (e) => {
    const suggestions = places?.map((data) => data.place_name);
    setActiveSuggestion(0);
    setFilteredSuggestions(suggestions);
    setShowSuggestions(true);
    setUserInput(e.currentTarget.value);
    setLocationSelected(null);
  };

  const onClick = (e) => {
    const placeSelected = places.find(
      (element) => element.place_name === e.currentTarget.innerText
    );
    setLon(placeSelected?.center[0]);
    setLat(placeSelected?.center[1]);
    setLocationSelected(e.currentTarget.innerText);
    setActiveSuggestion(0);
    setFilteredSuggestions([]);
    setShowSuggestions(false);
    setUserInput(e.currentTarget.innerText);
  };

  const onKeyDown = (e) => {
    console.log("onKeyDown");

    if (e.keyCode === ENTER_KEY) {
      setActiveSuggestion(0);
      setShowSuggestions(false);
      setUserInput(filteredSuggestions[activeSuggestion]);
    } else if (e.keyCode === UP_ARROW_KEY) {
      if (activeSuggestion === 0) {
        return;
      }
      setActiveSuggestion(activeSuggestion - 1);
    } else if (e.keyCode === DOWN_ARROW_KEY) {
      if (activeSuggestion - 1 === filteredSuggestions.length) {
        return;
      }
    }
    setActiveSuggestion(activeSuggestion + 1);
  };

  let suggestionsListComponent;
  if (showSuggestions && userInput) {
    if (places?.length > 0) {
      suggestionsListComponent = (
        <ul className="suggestions">
          {places.map((suggestion, index) => {
            let className;

            if (index === activeSuggestion) {
              className = "suggestion-active";
            }
            return (
              <li className={className} key={index} onClick={onClick}>
                {suggestion.place_name}
              </li>
            );
          })}
        </ul>
      );
    } else {
      suggestionsListComponent = (
        <div className="flex justify-center no-suggestions">
          <em>No suggestions available.</em>
        </div>
      );
    }
  }
  return (
    <>
      <div className="space-y-0">
        <input
          style={{
            backgroundColor: "#e2e8f0",
            letterSpacing: "0.05em"
          }}
          className={`data-hj-whitelist block appearance-none w-full border-none rounded-full shadow py-3 pl-12 pr-6 mb-0 leading-tight focus:outline-none focus:bg-gray-200 truncate`}
          type="text"
          onChange={onChange}
          onKeyDown={onKeyDown}
          value={userInput}
          placeholder="Search City"
        />
        {suggestionsListComponent}
      </div>
    </>
  );
};
