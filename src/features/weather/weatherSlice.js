import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//const weatherAdapter = createEntityAdapter({
//  selectId: (weather) => weather.dt
//});

//const initialState = weatherAdapter.getInitialState();
const initialState = {};

export const fetchWeather = createAsyncThunk(
  "weather/fetchWeather",
  async (url) => {
    console.log(url);
    const response = await fetch(url);
    return response.json();
  }
);

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchWeather.pending]: (state, action) => {
      state.status = "loading";
      state.error = null;
    },
    [fetchWeather.fulfilled]: (state, action) => {
      // Add any fetched posts to the array
      console.log("weather/fetchWeather status: " + action.payload);
      //if (action.payload.cod === 200) {
      state.status = "succeeded";
      //state.error = null;
      //weatherAdapter.setAll(state, action.payload);
      state.weather = action.payload;
      /*} else {
        console.log("request failed " + action.payload.message);
        state.status = "failed";
        state.error = action.payload.message;
      }*/
    },
    [fetchWeather.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    }
  }
});

export const selectCurrentWeather = (state) => state.weather.weather?.current;
export const selectMinutelyWeather = (state) => state.weather.weather?.minutely;
export const selectDailyWeather = (state) => state.weather.weather?.daily;
export const selectHourlyWeather = (state) => state.weather.weather?.hourly;
export const selectWeatherAlerts = (state) => state.weather.weather?.alerts;

export const selectStatus = (state) => state.weather.status;
export const selectError = (state) => state.weather.error;

/*export const {
  selectAll: selectWeather,
  selectById: selectWeatherById,
  selectIds: selectWeatherIds
} = weatherAdapter.getSelectors((state) => state.weather);*/

export default weatherSlice.reducer;
