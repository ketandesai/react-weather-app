import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter
} from "@reduxjs/toolkit";

const forecastAdapter = createEntityAdapter({
  selectId: (forecast) => forecast.dt
});

const initialState = forecastAdapter.getInitialState();

export const fetchForecast = createAsyncThunk(
  "forecast/fetchForecast",
  async (url) => {
    console.log(url);
    const response = await fetch(url);
    return response.json();
  }
);

const forecastSlice = createSlice({
  name: "forecast",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchForecast.pending]: (state, action) => {
      state.status = "loading";
      state.error = null;
    },
    [fetchForecast.fulfilled]: (state, action) => {
      // Add any fetched posts to the array
      if (action.payload.cod === "200") {
        state.status = "succeeded";
        forecastAdapter.setAll(state, action.payload.list);
      } else {
        console.log("request failed " + action.payload.message);
        state.status = "failed";
        state.error = action.payload.message;
      }
    },
    [fetchForecast.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    }
  }
});

export const selectForecastStatus = (state) => state.forecast.status;
export const selectForecastError = (state) => state.forecast.error;

export const {
  selectAll: selectForecast,
  selectById: selectForecastById,
  selectIds: selectForecastIds
} = forecastAdapter.getSelectors((state) => state.forecast);

export default forecastSlice.reducer;
