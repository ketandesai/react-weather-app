import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const API_URL = process.env.REACT_APP_API_GW_URL
const initialState = { status: 'idle', error: null }

/**
 * Fetches the location based on the browser ip address
 */
export const fetchForward = createAsyncThunk(
  'geocode/fetchForward',
  async (city) => {
    const response = await fetch(`${API_URL}/location/${city}.json`)
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
    },
  },
})

export const selectFeatures = (state) => state.geocode?.geocode?.features

export default geocodeSlice.reducer
