import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: "light"
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    themeUpdated(state, action) {
      state.theme = action.payload;
    }
  }
});

export const { themeUpdated } = themeSlice.actions;

export default themeSlice.reducer;

export const selectTheme = (state) => state.theme.theme;
