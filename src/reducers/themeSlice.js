import { createSlice } from "@reduxjs/toolkit";

const themeValue = window.localStorage.getItem('theme');

const initialState = {
  theme: themeValue !== null ? JSON.parse(themeValue) : 'light'
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    themeUpdated(state, action) {
      state.theme = action.payload;
      window.localStorage.setItem('theme', JSON.stringify(action.payload));
    }
  }
});

export const { themeUpdated } = themeSlice.actions;

export default themeSlice.reducer;

export const selectTheme = (state) => state.theme.theme;
