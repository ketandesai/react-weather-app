import { configureStore } from '@reduxjs/toolkit'
import weatherReducer from '../reducers/weatherSlice'
import forecastReducer from '../reducers/forecastSlice'
import locationReducer from '../reducers/locationSlice'
import geocodeReducer from '../reducers/geocodeSlice'
import themeReducer from '../reducers/themeSlice'
import favoriteReducer from '../reducers/favoriteSlice'

export default configureStore({
  reducer: {
    weather: weatherReducer,
    forecast: forecastReducer,
    location: locationReducer,
    geocode: geocodeReducer,
    theme: themeReducer,
    favorites: favoriteReducer,
  },
})
