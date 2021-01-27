import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = { status: 'idle', error: null }

export const fetchWeather = createAsyncThunk(
  'weather/fetchWeather',
  async (url) => {
    const response = await fetch(url)
    return response.json()
  }
)

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {},
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

export default weatherSlice.reducer
