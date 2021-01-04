import { configureStore } from "@reduxjs/toolkit";

import postsReducer from "../features/posts/postsSlice";
import usersReducer from "../features/users/usersSlice";
import notificationReducer from "../features/notifications/notificationSlice";
import weatherReducer from "../features/weather/weatherSlice";
import forecastReducer from "../features/weather/forecastSlice";
import locationReducer from "../features/weather/locationSlice";
import geocodeReducer from "../features/weather/geocodeSlice";

export default configureStore({
  reducer: {
    posts: postsReducer,
    users: usersReducer,
    notifications: notificationReducer,
    weather: weatherReducer,
    forecast: forecastReducer,
    location: locationReducer,
    geocode: geocodeReducer
  }
});
