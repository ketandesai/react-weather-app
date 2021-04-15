import React, { useState, useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { selectTheme } from '../../reducers/themeSlice'
import { fetchForward, selectFeatures } from '../../reducers/geocodeSlice'
import { locationUpdated } from '../../reducers/locationSlice'

import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'
import CircularProgress from '@material-ui/core/CircularProgress'
import InputAdornment from '@material-ui/core/InputAdornment'
import SearchIcon from '@material-ui/icons/Search'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'

export default function Autocompleter() {
  const selectedTheme = useSelector(selectTheme)
  //const theme = STYLES[selectedTheme]
  const dispatch = useDispatch()
  const places = useSelector(selectFeatures)
  const [open, setOpen] = useState(false)
  const [options, setOptions] = useState([])
  const [userInput, setUserInput] = useState('')
  const [locationSelected, setLocationSelected] = useState('')
  const loading = open && options?.length === 0

  const theme = createMuiTheme({
    palette: {
      type: selectedTheme,
    },
  })

  useEffect(() => {
    //get new suggestions as the user types
    dispatch(fetchForward(userInput))
  }, [dispatch, userInput])

  useEffect(() => {
    if (locationSelected) {
      const placeSelected = places.find(
        (element) => element.place_name === locationSelected
      )
      let lon = placeSelected?.center[0]
      let lat = placeSelected?.center[1]
      dispatch(locationUpdated({ lat: lat, lon: lon, city: locationSelected }))
    }
  }, [dispatch, locationSelected])

  useEffect(() => {
    //updated the suggestion list as new places are suggested
    if (places) {
      const suggestions = places.map((data) => data.place_name)
      setOptions(suggestions)
    }
  }, [places])

  useEffect(() => {
    if (!open) {
      setOptions([])
    }
  }, [open])

  return (
    <Autocomplete
      id="city-autocompleter"
      style={{ width: 'auto', padding: 16 }}
      open={open}
      onOpen={() => {
        setOpen(true)
      }}
      onClose={() => {
        setOpen(false)
      }}
      onChange={(event, newValue) => {
        setLocationSelected(newValue)
      }}
      onInputChange={(event, newInputValue) => {
        setUserInput(newInputValue)
      }}
      getOptionSelected={(option, value) => option.name === value.name}
      getOptionLabel={(option) => option}
      options={options}
      loading={loading}
      renderInput={(params) => (
        <ThemeProvider theme={theme}>
          <TextField
            {...params}
            label="Search Place for Weather"
            variant="outlined"
            InputProps={{
              ...params.InputProps,
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
              endAdornment: (
                <>
                  {loading ? (
                    <CircularProgress color="inherit" size={20} />
                  ) : null}
                </>
              ),
            }}
          />
        </ThemeProvider>
      )}
    />
  )
}
