import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { MAP_BOX_BASE_URL } from '../api/config.js'

import ReactGA from 'react-ga'

const initialState = { status: 'idle', error: null }

/**
 * Fetches the location based on the browser ip address
 */
export const fetchForward = createAsyncThunk(
  'geocode/fetchForward',
  async (city) => {
    const response = await fetch(
      `${MAP_BOX_BASE_URL}/geocoding/v5/mapbox.places/${city}.json?access_token=${process.env.REACT_APP_MAP_BOX_API_KEY}`
    )
    return response.json()
  }
)

const geocodeSlice = createSlice({
  name: 'geocode',
  reducers: {},
  initialState,
  extraReducers: {
    [fetchForward.pending]: (state, action) => {
      state.status = 'pending'
    },
    [fetchForward.fulfilled]: (state, action) => {
      // Add any fetched data to the array
      state.geocode = action.payload
      state.status = 'success'
    },
    [fetchForward.rejected]: (state, action) => {
      state.status = 'failed'
      state.error = action.error.message

      ReactGA.exception({
        description: `Geo lookup failed, ${action.error.message}`,
        fatal: true,
      })
    },
  },
})

export const selectFeatures = (state) => state.geocode?.geocode?.features

export default geocodeSlice.reducer
