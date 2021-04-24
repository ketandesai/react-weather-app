import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import ReactGA from 'react-ga'

const URL = 'https://extreme-ip-lookup.com/json'
const initialState = { status: 'idle', error: null }

/**
 * Fetches the location based on the browser ip address
 */
export const fetchLocation = createAsyncThunk(
  'location/fetchLocation',
  async () => {
    const response = await fetch(URL)
    return response.json()
  }
)

const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    locationUpdated(state, action) {
      state.location = action.payload
      state.status = 'success'
    },
  },
  extraReducers: {
    [fetchLocation.pending]: (state, action) => {
      state.status = 'pending'
    },
    [fetchLocation.fulfilled]: (state, action) => {
      // Add any fetched posts to the array
      state.location = action.payload
      state.status = 'success'
    },
    [fetchLocation.rejected]: (state, action) => {
      state.status = 'failed'
      state.error = action.error.message

      ReactGA.exception({
        description: `IP lookup failed, ${action.error.message}`,
        fatal: true,
      })
    },
  },
})

export const selectLocation = (state) => state.location?.location
export const selectStatus = (state) => state.location?.status
export const selectError = (state) => state.location.error
export const { locationUpdated } = locationSlice.actions
export default locationSlice.reducer
