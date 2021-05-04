import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const API_URL = process.env.REACT_APP_API_GW_URL
const unitsValue = window.localStorage.getItem('units')

const initialState = {
  status: 'idle',
  error: null,
  units: unitsValue !== null ? JSON.parse(unitsValue) : 'imperial',
}

export const fetchWeather = createAsyncThunk(
  'weather/fetchWeather',
  async ({ lat, lon, units }) => {
    let url = `${API_URL}/weather?lat=${lat}&lon=${lon}&units=${units}`
    const response = await fetch(url)
    return response.json()
  }
)

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    unitsUpdated(state, action) {
      state.units = action.payload
      window.localStorage.setItem('units', JSON.stringify(action.payload))
    },
  },
  extraReducers: {
    [fetchWeather.pending]: (state, action) => {
      state.status = 'loading'
      state.error = null
    },
    [fetchWeather.fulfilled]: (state, action) => {
      state.status = 'succeeded'
      state.weather = action.payload
    },
    [fetchWeather.rejected]: (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
    },
  },
})

export const selectCurrentWeather = (state) => state.weather.weather?.current
export const selectMinutelyWeather = (state) => state.weather.weather?.minutely
export const selectDailyWeather = (state) => state.weather.weather?.daily
export const selectHourlyWeather = (state) => state.weather.weather?.hourly
export const selectWeatherAlerts = (state) => state.weather.weather?.alerts

export const selectStatus = (state) => state.weather.status
export const selectError = (state) => state.weather.error
export const selectUnits = (state) => state.weather.units
export const { unitsUpdated } = weatherSlice.actions

export default weatherSlice.reducer
