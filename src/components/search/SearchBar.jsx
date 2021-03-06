import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { Wrapper } from '../styles/Wrapper'
import { fetchForward, selectFeatures } from '../../reducers/geocodeSlice'
import { locationUpdated } from '../../reducers/locationSlice'

const ENTER_KEY = 13
const UP_ARROW_KEY = 38
const DOWN_ARROW_KEY = 40

const SearchBar = () => {
  const dispatch = useDispatch()
  const [activeSuggestion, setActiveSuggestion] = useState(0)
  const [filteredSuggestions, setFilteredSuggestions] = useState([])
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [userInput, setUserInput] = useState('')
  const [lat, setLat] = useState('')
  const [lon, setLon] = useState('')
  const [locationSelected, setLocationSelected] = useState('')
  const places = useSelector(selectFeatures)

  useEffect(() => {
    if (userInput) {
      dispatch(fetchForward(userInput))
      if (locationSelected && lat && lon) {
        dispatch(
          locationUpdated({ lat: lat, lon: lon, city: locationSelected })
        )
      }
    }
  }, [dispatch, userInput, locationSelected, lat, lon])

  const onChange = (e) => {
    const suggestions = places?.map((data) => data.place_name)
    setActiveSuggestion(0)
    setFilteredSuggestions(suggestions)
    setShowSuggestions(true)
    setUserInput(e.currentTarget.value)
    setLocationSelected(null)
  }

  const onKeyDown = (e) => {
    if (e.keyCode === ENTER_KEY) {
      setActiveSuggestion(0)
      setShowSuggestions(false)
      //setUserInput(filteredSuggestions[activeSuggestion])
    } else if (e.keyCode === UP_ARROW_KEY) {
      if (activeSuggestion === 0) {
        return
      }
      setActiveSuggestion(activeSuggestion - 1)
    } else if (e.keyCode === DOWN_ARROW_KEY) {
      if (activeSuggestion - 1 === filteredSuggestions.length) {
        return
      }
    }
    setActiveSuggestion(activeSuggestion + 1)
  }

  const onClick = (e) => {
    const placeSelected = places.find(
      (element) => element.place_name === e.currentTarget.innerText
    )
    setLon(placeSelected?.center[0])
    setLat(placeSelected?.center[1])
    setLocationSelected(e.currentTarget.innerText)
    setActiveSuggestion(0)
    setFilteredSuggestions([])
    setShowSuggestions(false)
    setUserInput(e.currentTarget.innerText)
  }

  let suggestionsListComponent
  if (showSuggestions && userInput) {
    if (places?.length > 0) {
      suggestionsListComponent = (
        <Suggestion>
          {places.map((suggestion, index) => {
            let className

            if (index === activeSuggestion) {
              className = 'suggestion-active'
            }
            return (
              <li className={className} key={index} onClick={onClick}>
                {suggestion.place_name}
              </li>
            )
          })}
        </Suggestion>
      )
    } else {
      suggestionsListComponent = (
        <div className="flex justify-center no-suggestions">
          <em>No suggestions available.</em>
        </div>
      )
    }
  }

  return (
    <Wrapper
      style={{
        '--grid-area': 'search',
        height: '50px',
        zIndex: 2,
      }}
    >
      <SearchBox
        onChange={onChange}
        onKeyDown={onKeyDown}
        value={userInput}
        placeholder="Search City"
      />
      {suggestionsListComponent}
    </Wrapper>
  )
}

const Suggestion = styled.ul`
  border: none;
  border-top-width: 0;
  list-style: none;
  margin-top: -10px;
  max-height: 250px;
  overflow-y: auto;
  padding-left: 0;
  text-align: left;
  max-width: 600px;
  width: 100%;
  z-index: 10;

  li {
    background-color: #e2e8f0;
    padding: 0.5rem;

    :hover {
      background-color: #44b4f5;
      /*color: #d8e6f7;*/
      cursor: pointer;
      font-weight: 700;
    }

    :not(:last-of-type) {
      border-bottom: none;
    }
  }
`

const SearchBox = styled.input`
  max-width: 600px;
  width: 100%;
  border: none;
  border-radius: 20px;
  background-color: #e2e8f0;
  letter-spacing: 0.05em;
  padding-left: 3rem;
  font-weight: bold;
  font-size: 16px;

  :focus {
    outline: none;
  }
`

export default SearchBar
